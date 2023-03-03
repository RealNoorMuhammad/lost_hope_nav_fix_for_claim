import React from "react";

import { Grid } from "@mui/material";

import mc from "../Component/img/mc.jpg";
import dc from "../Component/img/dn.jpg";
import god from "../Component/img/god.jpg";

import deb from "../Component/img/deb.jpg";
import cory from "../Component/img/cory.jpg";
import got from "../Component/img/got.jpg";

import cms from "./andi.jpg";
import chris from "./chris.jpg";

const Team = () => {
  return (
    <div className="container" id="team">
      {" "}
      <br />
      <h2 className="partner font_family">Our Team</h2>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={mc}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
        <br />
        <br />
        <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>
            Tyler McGoldrick - Founder of LHS
          </h2>
          <br />
    

          <a href="https://twitter.com/McGoldT" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={dc}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
        <br />
        <br />
        <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>Dan (Munch) - Lead Designer</h2>
          <br />
        

          <a href="https://twitter.com/OGMunch83" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={deb}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>

        <Grid item md={6} lg={6} xs={12} sm={12}>
        <br />
        <br />
        <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>Deb - Lore Writer</h2>
          <br />
           

          <a href="https://twitter.com/deb3writer" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={got}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
        <br />
        <br />
        <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>
            Justin (Enmity) - Strategic Leader
          </h2>
          <br />
         

          <a href="https://twitter.com/enmityancientdr" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={cms}
              style={{ height: "110%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <br />
          <br />
          <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>Andie - Community Manager </h2>
          <br />
          <a href="https://twitter.com/andie1898" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={chris}
              style={{ height: "110%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <br />
          <br />
          <br />
          <h2 className="partner font_family" style={{color:"#fff"}}>Chris - Collab Manager</h2>
          <br />

          <a href="https://twitter.com/Fiddleaboon" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
