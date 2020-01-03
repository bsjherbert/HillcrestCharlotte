import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';


import MainNavTabs from './MainNavTabs';

const styles = () => ({
  tool: {
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 6,
    borderTopWidth: 6,
    borderColor: "#08356c",
    position: "relative",
    zIndex: 5
  }
})

class MainNav extends Component {
  render() {  
    const { classes } = this.props;

    return (
      <AppBar color="default" component="nav" className={classes.tool}>
        <Toolbar disableGutters>
          <MainNavTabs />
        </Toolbar>
      </AppBar>
    );
  }
}

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNav);
