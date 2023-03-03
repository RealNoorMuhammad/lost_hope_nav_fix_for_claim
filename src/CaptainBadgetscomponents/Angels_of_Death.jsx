import React from "react";
import aod from "./assets/aod.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const AngelsofDeath = ({count, mint, disabled}) => {
  return (
    <div className="container">
      <MDBCard
        style={{
          background: "transparent",
          border: "3px solid  #990000",
          borderRadius: "70px",
          justifyContent: "center",
          textAlign: "center",
          color: "#990000",
        }}
      >
        <MDBCardImage
          src={aod}
          position="top"
          alt="..."
          style={{ width: "100%" }}
        />
        <MDBCardBody>
          <MDBCardTitle style={{ fontSize: "20px", fontWeight: "700" }}>
            Angle of Death
          </MDBCardTitle>
          <br />
          <MDBCardTitle style={{ fontSize: "20px", fontWeight: "700" }}>
            {`${count} / 100`}
          </MDBCardTitle>
          <br />
          <button
            href="#"
            className="btn-grad"
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "initial",
              alignItems: "center",
            }}
            onClick={mint}
            disabled={disabled}
          >
            Mint
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AngelsofDeath;
