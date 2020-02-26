import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/styles';
import { Link as RouterLink, Router } from "react-router-dom";
import { Box, Grid, Link, Typography, ClickAwayListener } from '@material-ui/core';

import HillcrestLogo from '../Logo/HillcrestLogo'



const styles = () => ({
  tool: {
    // borderStyle: "solid none",
    // borderBottomWidth: 6,
    // borderTopWidth: 6,
    // borderColor: "#08356c",
    position: "relative",
    zIndex: 5,
    height: "inherit"
  }
})

class MainNav extends Component {
  render() {  
    const { classes } = this.props;

    return (
      <AppBar color="white" component="nav" className={classes.tool}>
          <Grid container component="span" 
          direction="row"
          justify="space-around"
          alignItems="center" className={classes.navTabs}>
          <span style={{ float: "right", maxHeight: "20%", maxWidth: "20%", paddingTop: "0.5rem" }}>
            <RouterLink href="/" to="/" title="Hillcrest Charlotte | Home">
              <HillcrestLogo />
            </RouterLink>
          </span>
          </Grid>
      </AppBar>
    );
  }
}

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNav);
