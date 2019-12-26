import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainNavTabs from './MainNavTabs';

class MainNav extends Component {
  render() {  
    return (
      <AppBar color="default" position="static" component="nav">
        <Toolbar disableGutters>
          <MainNavTabs />
        </Toolbar>
      </AppBar>
    );
  }
}

export default MainNav;