import React from "react";
import on from "./yetii.gif";

import { Grid } from "@mui/material";

const Pne = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12} lg={12} xs={12} sm={12}>
          <img
            src={on}
            style={{ width: "100%", borderRadius: "10px", height: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pne;
