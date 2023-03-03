import React from "react";

import AngelsofDeath from "./Angels_of_Death";
import ArmyoftheDeath from "./Army_of_the_Dead";
import BlackDeathDoctor from "./Black_Death_Doctor_Conspiracy";
import DarkSpartaAlliance from "./Dark_Sparta_Alliance";
import DevineShieldMaidens from "./Devine_Shield_Maidens";
import DragonClawClan from "./Dragon_Claw_Clan";
import HouseofYeti from "./House_of_Yeti";
import LastHopeOrder from "./Last_Hope_Order";
import MountainWreckers from "./Mountain_Wreckers";
import WolfPack from "./WolfPack";

import logo from "./assets/lhss.png";

import { Grid } from "@mui/material";

import { useWallet } from "../hooks/useWallet";

const AllMintCards = () => {
  const { account, connect, captainData, mint } = useWallet();
  const { counts, mintLimit, limitIndex } = captainData;
  const isMintLimit = limitIndex >= mintLimit;

  return (
    <div>
      <Grid
        container
        style={{
          background: "transparent",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        <a href="./">
          {" "}
          <img src={logo} style={{ width: "20%", height: "100%" }} />
        </a>
        <br />
        <br />
      </Grid>
      <h1
        style={{
          background: "transparent",

          justifyContent: "center",
          textAlign: "center",
          color: "#990000",
        }}
      >
        Faction Captain Mint
      </h1>
      <br />
      <br />
      <Grid
        container
        style={{
          background: "transparent",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        <br />
        <div className="container">
          Limit one per wallet
        </div>
        <br />
        <div className="container">
          {!account ? (
              <a
                class="button"
                type="button"
                name="Hover"
                onClick={() => connect()}
              >
                Connect Wallet
              </a>
          ) : !!isMintLimit ? (
            <span>You've already minted one</span>
          ) : false}
          <br />
          <br />
          <br />
          <br />
        </div>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <AngelsofDeath count={counts[4] || 0} mint={() => mint(5)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <ArmyoftheDeath count={counts[1] || 0} mint={() => mint(2)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <BlackDeathDoctor count={counts[3] || 0} mint={() => mint(4)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <DarkSpartaAlliance count={counts[8] || 0} mint={() => mint(9)} disabled={!account || isMintLimit} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <DevineShieldMaidens count={counts[5] || 0} mint={() => mint(6)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <DragonClawClan count={counts[6] || 0} mint={() => mint(7)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <HouseofYeti count={counts[7] || 0} mint={() => mint(8)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <LastHopeOrder count={counts[2] || 0} mint={() => mint(3)} disabled={!account || isMintLimit} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <MountainWreckers count={counts[9] || 0} mint={() => mint(10)} disabled={!account || isMintLimit} />
        </Grid>
        <Grid item md={6} lg={3} xs={12} sm={6}>
          <WolfPack count={counts[0] || 0} mint={() => mint(1)} disabled={!account || isMintLimit} />
        </Grid>
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default AllMintCards;
