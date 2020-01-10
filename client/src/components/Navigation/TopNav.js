import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import { Link, Grid, Typography, ListItemAvatar } from '@material-ui/core';
import { AppBar, Toolbar, Collapse, ClickAwayListener } from '@material-ui/core';
// import { ToggleButton } from "@material-ui/lab";
import { MenuRounded, LockOpenRounded, AccountBoxRounded, ExpandLessRounded, ExpandMoreRounded, LockRounded, DashboardRounded, SettingsRounded } from '@material-ui/icons';

import TimeLocationModal from '../Modals/TimeLocation';
import AuthContext from '../../contexts/AuthContext';

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: "300px",
    border: "1px solid #736757"
  },
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
  static contextType = AuthContext;

  state = {
    isOpen: false,
    collapsed: true
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // toggleCollapse = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

  handleLogout = () => {
    this.context.onLogout();
  }


  render() {
    const { user } = this.context;
    const { isOpen, collapsed } = this.state;

    const { classes } = this.props;
    const dropdownMenuClass = `user-dropdown ${isOpen && 'show'}`;
    // const targetClass = `userMenu ${!collapsed && 'show'}`;
    // const togglerClass = `userMenu-toggler ${collapsed && 'collapsed'}`;

    return (
      <>
        <AppBar color="secondary" component="nav" className={classes.tool}>
          <Toolbar>
            <Grid container direction="row" spacing={2}
              justify="flex-end" alignItems="center">
              <Grid item style={{ borderRight: 1.5, borderColor: "primary", borderRightStyle: "dotted" }}>
                <Link color="primary" href="https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true">Give</Link>
              </Grid>

              <Grid item style={{ borderRight: 1.5, borderColor: "primary", borderRightStyle: "dotted" }}>
                <TimeLocationModal />
              </Grid>

              <Grid item component="span">
                <Typography color="primary" style={{ cursor: "default" }}>MyHillcrest</Typography>
              </Grid>

              {/* UserMenu Collapse OR Login link....className={targetClass}  */}
              <Grid item component="span">
                {user &&
                  user
                  ? <>
                    <List component="nav" dense={true} className={classes.list}>
                      <ListItem button onClick={this.toggleOpen} className={dropdownMenuClass} aria-labelledby="userMenu">
                        <ListItemAvatar variant="rounded" fontSize="small" color="inherit">
                          <AccountBoxRounded />
                        </ListItemAvatar>
                        <ListItemText >Hello, {user.firstName}!</ListItemText>
                        {isOpen === true ? <ExpandLessRounded /> : <ExpandMoreRounded />}
                      </ListItem>

                      <ClickAwayListener onClickAway={this.toggleOpen}>
                        <Collapse in={isOpen} timeout="auto" unmountOnExit>
                          <List component="menu" disablePadding>
                            {/* Dashboard link */}
                            <ListItem button>
                              <ListItemIcon>
                                <DashboardRounded />
                              </ListItemIcon>
                              <ListItemText color="primary" variant="subtitle1"><Link href="/dashboard" to="/dashboard">Dashboard</Link></ListItemText>
                            </ListItem>
                            {/* Settings link */}
                            <ListItem button href="#" to="#">
                              <ListItemIcon>
                                <SettingsRounded />
                              </ListItemIcon>
                              <Link color="primary" component="p" variant="subtitle1">Settings</Link>
                            </ListItem>
                            {/* Logout link */}
                            <ListItem button>
                              <ListItemIcon>
                                <LockRounded />
                              </ListItemIcon>
                              <Link onClick={this.handleLogout} title="Log Out of MyHillcrest" aria-label="MyHillcrest Logout">Logout</Link>
                            </ListItem>
                          </List>
                        </Collapse>
                      </ClickAwayListener>
                    </List>
                  </>
                  :
                  <Typography color="initial" component="span">
                    (<Link color="inherit" href="login" to="login" title="Log In to MyHillcrest" aria-label="Log In to MyHillcrest">
                      <LockOpenRounded fontSize="inherit" style={{ position: "relative", right: 2, top: 2 }} />
                      Login
                    </Link>)

                  </Typography>
                }
              </Grid>
            </Grid>
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
