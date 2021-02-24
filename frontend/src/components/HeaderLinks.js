import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
// import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Tooltip from '@material-ui/core/Tooltip';

// // @material-ui/icons
// import { Apps } from '@material-ui/icons';

// core components
// import CustomDropdown from './CustomDropdown';
import Button from './CustomButton';

import styles from '../styles/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="http://youtube.com/"
            target="_blank"
            className={classes.navLink}
          >
            <p>Login</p>
          </Button>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Extra"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            // <Link to="/" className={classes.dropdownLink}>
            //   All components
            // </Link>,
            <a
              href="https://spc.iitj.ac.in/invitation/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className={classes.dropdownLink}
            >
              Invitation
            </a>,
            <a
              href="https://spc.iitj.ac.in/chairman-message/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className={classes.dropdownLink}
            >
              Chairman's Message
            </a>,
            <a
              href="https://spc.iitj.ac.in/director-message/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className={classes.dropdownLink}
            >
              Director's Message
            </a>,
          ]}
        /> 
        </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Recruiters"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          //   buttonIcon={Apps}
          dropdownList={[
            //   <Link to="/" className={classes.dropdownLink}>
            //     All components
            //   </Link>,
            <a
              href="https://spc.iitj.ac.in/why-recruit/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className={classes.dropdownLink}
            >
              Why Recruit?
            </a>,
            <a
              href="https://spc.iitj.ac.in/placement-statistics/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className={classes.dropdownLink}
            >
              Placement Statistics
            </a>,
          ]}
        /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="http://youtube.com/"
            target="_blank"
            className={classes.navLink}
          >
            <p>Register</p>
          </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Students"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                All components
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Forms"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                All components
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="CDC Team"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                All components
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Login|Register"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                All components
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}> */}

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
