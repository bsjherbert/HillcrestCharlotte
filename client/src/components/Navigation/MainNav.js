import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/styles';


import MainNavTabs from './MainNavTabs';

const styles = () => ({
  tool: {
    // borderStyle: "solid none",
    // borderBottomWidth: 6,
    // borderTopWidth: 6,
    borderColor: "#08356c",
    position: "relative",
    zIndex: 5,
    height: "inherit"
  }
})

class MainNav extends Component {
  render() {  
    const { classes } = this.props;

    return (
      <AppBar component="nav" className={classes.tool}>
          <MainNavTabs />
      </AppBar>
    );
  }
}

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNav);
