import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
const stylefooter = {
  position: "absolute",
  bottom: 0,
  alignContent: "center",
};
export default function Footer() {
  return (
    <AppBar position="static" color="" style={stylefooter}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <span style={{ fontSize: 20 }}>© 2021 KMPH</span> <br></br>
            <span style={{ fontSize: 10, marginLeft: 30 }}>By IIT Jodhpur</span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
