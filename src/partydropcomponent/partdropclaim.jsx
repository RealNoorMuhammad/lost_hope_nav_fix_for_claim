import React from "react";
import lost from "./lhs.png";
import { Grid } from "@mui/material";
import { useWallet } from "../hooks/useWallet";
import logo from "./lh.png";
const Partdropclaim = () => {
  const { account, connect, claimData, claim } = useWallet();
  const { isRegistered, hasClaimed } = claimData;

  return (
    <div className="container">
      <Grid container>
        {" "}
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
          <br />
          <a href="./">
            {" "}
            <img src={logo} className="partynavlogo" />
          </a>

          <br />
          <br />
          <div class="">
            <br />

            <h2 className="partner font_family"> HOPE Token Party Claim </h2>
            <br />
            <br />
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              A gift of HOPE to our growing Lost Hope Society community.{" "}
            </p>
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              If you own an NFT from a partner collection, or registered on LHS Discord, you can claim
              420 HOPE tokens below (once per wallet), as a welcome gift to our web3 community.
              {" "}
            </p>
          </div>
          <br />
          <div class="">
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              HOPE Token Contract:{" "}
            </p>
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              0xfb2059cD74Ad6dB848ECD99a2F691512eF1d4D92{" "}
            </p>
          </div>

          <br />
          <img
            src={lost}
            style={{ borderRadius: "10px" }}
            className="lost_img_party"
          />
        </Grid>
      </Grid>

      <Grid container>
        {" "}
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
          {!!account && (
            <div class="">
              <p
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                  color: "#fff ",
                  fontSize: "20px",
                }}
              >
                Claim Status:{" "}
                {!account
                  ? "Connect Wallet"
                  : hasClaimed
                  ? "Already Claimed"
                  : isRegistered
                  ? "420 HOPE Claim Available"
                  : "Account Not Whitelisted"}{" "}
              </p>
            </div>
          )}
          <br />
          {!account ? (
            <div className="container">
              <a
                class="button"
                type="button"
                name="Hover"
                onClick={() => connect()}
              >
                Connect Wallet
              </a>
            </div>
          ) : !hasClaimed && isRegistered ? (
            <div className="container">
              <a
                class="button"
                type="button"
                name="Hover"
                onClick={() => claim()}
              >
                Claim
              </a>
            </div>
          ) : false }
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default Partdropclaim;
