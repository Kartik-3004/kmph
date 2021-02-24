import React from 'react';
// nodejs library that concatenates classes
// import classNames from 'classnames';
// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from '../components/Header';
import HeaderLinks from '../components/HeaderLinks';

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
          color: 'white',
        }}
        {...rest}
      />
    </div>
  );
}