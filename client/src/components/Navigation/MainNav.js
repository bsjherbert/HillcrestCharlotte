import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';


import MainNavTabs from './MainNavTabs';

const styles = theme => ({
  tool: {
    borderBottomStyle: "solid",
    borderBottom: 8,
    borderBottomColor: theme.palette.default.main,
    position: "relative",
    top: "3vh",
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
