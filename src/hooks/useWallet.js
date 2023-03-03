import {useState, useCallback, useEffect} from "react"

import {providers, utils, Contract} from "ethers"
import Web3Modal from "web3modal"
import claimContract from "../contracts/LHS_Registrar.json"
import captainContract from "../contracts/LostHopeCaptains.json"

const HOPE_PARTY_MUMBAI = "0x51501796175AD2660F0e8346D516E5E4D89FbC65" //"0x5957bD12a4F7d9BCDFCc0a16D7497b2b70722aF6"
const HOPE_PARTY_MATIC = "" //"0xfb2059cD74Ad6dB848ECD99a2F691512eF1d4D92"

const HOPE_CAPTAINS_MUMBAI = "0x6D6A681839dFA8f428dDF4c97d2d607b773F0515"
const HOPE_CAPTAINS_MATIC = ""

const partyAddy = HOPE_PARTY_MUMBAI
const captainAddy = HOPE_CAPTAINS_MUMBAI

//import WalletConnect from "@walletconnect/web3-provider";
//import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const providerOptions = {
  /*
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: ''// env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: env.INFURA_KEY // required
    }
  }*/
}

let blocking

export const useWallet = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [connector, setConnector] = useState()
  const [provider, setProvider] = useState()
  const [account, setAccount] = useState("")
  const [chain, setChain] = useState("")
  //const [balance, setBalance] = useState("");
  const [block, setBlock] = useState("")
  const [pulse, setPulse] = useState("")

  const [claimData, setClaimData] = useState({
    hasClaimed: false,
    isRegistered: false,
  })

  const [captainData, setCaptainData] = useState({
    counts: [],
    mintLimit: 1,
    limitIndex: 0
  })

  async function connect() {
    const web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    })

    try {
      const _connector = await web3Modal.connect()
      //console.log("conector: ", _connector);

      const _provider = new providers.Web3Provider(_connector)
      //console.log("provider: ", _provider)

      const _accounts = await _provider.listAccounts()
      console.log("account", _accounts[0])

      const _network = await _provider.getNetwork()
      console.log("chain", _network.chainId)

      setConnector(_connector)
      setProvider(_provider)
      if (_accounts) setAccount(_accounts[0])
      else setAccount("")
      setChain(_network.chainId)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (provider) {
        // Subscribe to accounts change
        provider.on("accountsChanged", accounts => {
          console.log(accounts)
        })

        // Subscribe to chainId change
        provider.on("chainChanged", chainId => {
          console.log(chainId)
        })

        // Subscribe to provider connection
        provider.on("connect", ({chainId}) => {
          console.log(chainId)
        })

        // Subscribe to provider disconnection
        provider.on("disconnect", ({code, message}) => {
          console.log(message)
        })
      }
    })()
  }, [provider])

  const updateBlock = useCallback(
    _block => {
      //console.log("updateBlock", _block.toString());
      setBlock(_block.toString())
    },
    [setBlock]
  )

  useEffect(() => {
    if (provider) {
      //console.log("setting up block watch...");
      provider.on("block", updateBlock)
      return () => provider.off("block", updateBlock)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider])

  useEffect(() => {
    if (blocking) {
      clearTimeout(blocking)
    }
    blocking = setTimeout(() => {
      blocking = false
      //console.log("updatePulse", block);
      setPulse(block)
    }, "2000")
  }, [block])

  const disconnect = useCallback(async () => {
    if (blocking) {
      clearTimeout(blocking)
    }
    if (provider) {
      provider.off("block", updateBlock)
    }
    console.log("user disconnected")
  }, [])

  useEffect(() => {
    (async () => {
      if (provider && account) {
        try {
          //console.log("pulse effect on: ", block)

          const contract = new Contract(partyAddy, claimContract.abi, provider)

          const isRegistered = await contract.isRegistered(account)
          //console.log("isWL: ", isWL)

          const hasClaimed = await contract.hasClaimed(account)
          //console.log("hasClaimed: ", hasClaimed)

          setClaimData({
            hasClaimed,
            isRegistered
          })
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [provider, pulse])

  useEffect(() => {
    (async () => {
      if (provider && account) {
        try {
          //console.log("pulse effect on: ", block)

          const contract = new Contract(captainAddy, captainContract.abi, provider)

          const counts = [];

          const mintLimit = await contract.mintLimit()
          //console.log("mintLimit: ", mintLimit)

          const limitIndex = await contract.limitIndex(account)
          //console.log("limitIndex: ", limitIndex)

          for (let i=0; i<10; i++) {
            const _count = await contract.factionIndex(i+1)
            counts[i] = _count;
          }
          //console.log("counts: ", counts)

          setCaptainData({
            counts,
            mintLimit,
            limitIndex
          })
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [provider, pulse])

  const claim = useCallback(
    async () => {
      const contract = new Contract(partyAddy, claimContract.abi, provider)

      setIsBusy(true)
      try {
        const signer = provider.getSigner()
        console.log("signer: ", signer)
        if (!signer) return

        let _tx = await contract.connect(signer).claim()

        console.log("tx hash: ", _tx?.hash)
        let _receipt = await _tx.wait()
        console.log("tx receipt: ", _receipt)
        setIsBusy(false)
      } catch (error) {
        console.error("Harvest Error: ", error)
        setIsBusy(false)
      }
    },
    [provider, pulse]
  )

  const mint = useCallback(
    async (faction) => {
      const contract = new Contract(captainAddy, captainContract.abi, provider)

      setIsBusy(true)
      try {
        const signer = provider.getSigner()
        console.log("signer: ", signer)
        if (!signer) return

        let _tx = await contract.connect(signer).mint(faction.toString(), { value: utils.parseEther('0.1') })

        console.log("tx hash: ", _tx?.hash)
        let _receipt = await _tx.wait()
        console.log("tx receipt: ", _receipt)
        setIsBusy(false)
      } catch (error) {
        console.error("Minting Error: ", error)
        setIsBusy(false)
      }
    },
    [provider, pulse]
  )

  return {
    connector,
    provider,
    account,
    chain,
    //balance,
    block,
    pulse,
    connect,
    disconnect,
    claimData,
    captainData,
    claim,
    mint
  }
}
