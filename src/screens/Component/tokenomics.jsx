import React from "react";

import { Grid } from "@mui/material";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import one from "./popp.png";
import two from "./tgs.png";
import three from "./img/cap.gif";
import four from "./img/dar.gif";

const History = () => {
  return (
    <div className="container" id="story">
      {" "}
      <br />
      <br />
      <br />
      <br />
      <h2 className="partner font_family">Hope token (tokenomics)</h2>
      <br />
      <br />
      <img
        src={one}
        position="top"
        alt="..."
        style={{ height: "100%", borderRadius: "20px", width: "100%" }}
      />
      <br />
      <br />
      <p className="partners colors_tok">
        <br />
        <br />
        <br />
        Our HOPE tokens are the utility tokens of the LHS ecosystem.
        <br />
        <br />
        With a total supply of 1 Billion and fully incorporated into our NFTs
        using 0xPioneers NFTfi protocol.
        <br />
        <br />
        Our supply will be released in stages with Vesting schedules to protect
        the community.
        <br />
        <br />
        Schedule for first year of supply release
        <br />
        <br />
        Faction Captains Harvest- 20 Million (locked for 1 year)
        <br />
        <br />
        Faction Scrolls Harvest- 100 Million (emitted over 1 year)
        <br />
        <br />
        Ambassador Sale- 100 Million (variable locking periods)
        <br />
        <br />
        $HOPE token is live on Elk Finance, details bellow:
        <br />
        <br />
        HOPE token address :
        <span> 0xC15B6939E9941B3E6a9bE9Be172B4456878B7a62</span>
        <br />
        <br />
        HOPE/MATIC LP:
        <span> 0x4088b29be549Fa447E7bdD902aE0f14F5f7f60C0</span>
        <br />
        <br />
        Trade HOPE:&nbsp;
        <a
          href="  https://app.elk.finance/swap/137/MATIC/HOPE"
          style={{ color: "#990000" }}
        >
          {" "}
          https://app.elk.finance/swap/137/MATIC/HOPE
        </a>
        <br />
        <br />
        HOPE Dexscreener:&nbsp;
        <a
          href=" https://dexscreener.com/polygon/0x4088b29be549fa447e7bdd902ae0f14f5f7f60c0"
          style={{ color: "#990000" }}
        >
          {" "}
          https://dexscreener.com/polygon/0x4088b29be549fa447e7bdd902ae0f14f5f7f60c0
        </a>
      </p>
      <br />
      <br />
    </div>
  );
};

export default History;
