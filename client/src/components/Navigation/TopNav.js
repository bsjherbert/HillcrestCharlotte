import React, { Component } from 'react';
// import { Link as ReactLink} from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import TimeLocationModal from '../Modals/TimeLocation';

// import AuthContext from '../../contexts/AuthContext';
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

const styles = theme => ({
  tool: {
    borderBottomStyle: "solid",
    borderBottom: 8,
    borderBottomColor: theme.palette.primary.main,
    position: "relative",
    top: 0,
    zIndex: 5
  }
})

class Navigation extends Component {
  // static contextType = AuthContext;

  // state = {
  //   collapsed: true
  // }

  // toggleCollapse = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }
  
  render() {
    // const { user } = this.context;
    // const { collapsed } = this.state;
    // const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    // const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;
    const { classes } = this.props;

    return (
      <>
        <AppBar color="secondary" component="header" className={classes.tool}>
          <Toolbar>
            <Grid container direction="row" spacing={2}
                justify="flex-end" alignItems="center">
                <Grid item style={{borderRight: 1.5, borderColor: "primary", borderRightStyle: "dotted"}}>
                  <Link color="primary" href="https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true">Give</Link>
                </Grid>

                <Grid item style={{borderRight: 1.5, borderColor: "primary", borderRightStyle: "dotted"}}>
                  <TimeLocationModal />
                </Grid>

                <Grid item component="p" style={{borderRight: 1.5, borderColor: "primary", borderRightStyle: "dotted"}}>
                  <Link color="primary" href="login">My Hillcrest</Link>
                </Grid>
            </Grid>
          {/*crbtemp <Link className='navbar-brand' to='#'>Project 3</Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}

          {/* <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                  </>}
            </ul>
          </div> */}
          </Toolbar>
        </AppBar>
     
      </>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
