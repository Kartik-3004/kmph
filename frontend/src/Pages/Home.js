import { InfoOutlined } from "@material-ui/icons";
import React from "react";
// nodejs library that concatenates classes
// import classNames from 'classnames';
// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from "../components/Header";
import HeaderLinks from "../components/HeaderLinks";
import Login from "../components/Login";
import Homeimage from "../components/Homeimage";
import Footer from "../components/Footer";
// import styles from '../styles/landingPage';

// const dashboardRoutes = [];

// const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  // const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        //change header bg color
        color="white"
        // routes={dashboardRoutes}
        brand="kmph"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div style={{ marginTop: 100 }}>
        <h1>Add Title</h1>

        <Login
          marginl="200px"
          head="Create QUIZ"
          subhead="Teacher"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown."
          buttontext="Login"
        />
        <Login
          marginl="30px"
          head="Attempt QUIZ"
          subhead="Student"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown."
          buttontext="SignIN"
        />
        <Homeimage />
      </div>
      <Footer />
    </div>
  );
}
