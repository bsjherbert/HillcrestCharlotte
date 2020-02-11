import React, { useState, useRef } from 'react';
import { Link as RouterLink, Router } from "react-router-dom";
import { Box, Grid, Link, Typography, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import HillcrestLogo from '../Logo/HillcrestLogo'

const useStyles = makeStyles(theme => ({
  navTabs: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      direction: "column",
      padding: "1%"
    }
  }
}))

export default function MainNavTabs(props) {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null)
  const [showMenu, setShowMenu] = useState("")

  const mainNav = useRef(null)

  const handleOpen = event => {
    if (anchor === event.currentTarget.title) {
      handleClose(event)
    } else {
      setAnchor(event.currentTarget.title)

      if (!showMenu) {
        setShowMenu(true)
      }
    }
  }

  const handleClose = event => {
    if (mainNav.current === null || anchor === event.currentTarget.title || !mainNav.current.contains(event.target)) {
      setAnchor(null)
      setShowMenu("")
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <span ref={mainNav} aria-label="main navigation">
        <Grid container component="span"
          direction="row"
          justify="space-around"
          alignItems="center" className={classes.navTabs}>
          <span style={{ float: "left", maxHeight: "25%", maxWidth: "25%", padding: "0.5rem" }}>
            <Link component={RouterLink} to="/" title="Hillcrest Charlotte | Home">
              <HillcrestLogo />
            </Link>
          </span>
          {/* HOME Tab */}
          <Grid item component="span">
            <Link underline="hover" component={RouterLink} className="navTab" color="textSecondary" variant="h6" to="/"
              title="Home" style={{ cursor: "pointer" }} aria-label="Home" aria-controls="home" aria-haspopup="false">
              Home
            </Link>
          </Grid>
          {/* NEW Tab */}
          <Grid item component="span">
            <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
              title="I'm New" style={{ cursor: "pointer" }} aria-label="I'm New" aria-controls="new-menu" aria-haspopup="false" onClick={handleOpen}>
              I'm New
            </Link>
          </Grid>
          {/* SERVE Tab */}
          <Grid item component="span">
            <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
              title="Serve" style={{ cursor: "pointer" }} aria-label="Serve Menu" aria-controls="serve-menu" aria-haspopup="false" onClick={handleOpen}>
              Serve
            </Link>
          </Grid>
          {/* SUPPORT Tab */}
          <Grid item component="span">
            <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
              title="Support" style={{ cursor: "pointer" }} aria-label="Support Menu" aria-controls="support-menu" aria-haspopup="false" onClick={handleOpen}>
              Support
            </Link>
          </Grid>
          {/* SHARE Tab */}
          <Grid item component="span">
            <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
              title="Share" style={{ cursor: "pointer" }} aria-label="Share Menu" aria-controls="share-menu" aria-haspopup="false" onClick={handleOpen}>
              Share
            </Link>
          </Grid>
        </Grid>

        {/* DROP MENUS */}
        <Box className={`dropNav ${showMenu && 'show'}`}>
          {/* NEW MENU */}
          {anchor === "I'm New" && (
            <ClickAwayListener onClickAway={handleClose}>

              <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
                justify="space-around" alignContent="center" aria-label="Visitor Resources">
                {/* NEW: Sub Menu 1 */}
                <Grid item>
                  <Typography component="p" variant="subtitle1" color="primary">
                    <strong>Welcome to Hillcrest</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <List dense disablePadding>
                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/about-us">
                        <ListItemText>
                          About Us
                        </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/what-to-expect">
                        <ListItemText>
                          What to Expect
                        </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/connection">
                        <ListItemText>
                            Connection
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
                {/* NEW: Sub Menu 2 */}
                <Grid item>
                  <Typography component="p" variant="subtitle1" color="primary" align="left">
                    <strong>Our Beliefs</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <List dense disablePadding>
                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/the-gospel">
                        <ListItemText>
                          The Gospel
                        </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/statement-of-faith">
                        <ListItemText>
                          Statement of Faith
                        </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/constitution">
                        <ListItemText>
                          Constitution
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
                {/* NEW: Sub Menu 3 */}
                <Grid item>
                  <Typography component="p" variant="subtitle1" color="primary">
                    <strong>Leadership Team</strong>
                  </Typography>

                  <Typography variant="subtitle2">
                    <List dense disablePadding>
                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/pastors">
                        <ListItemText>
                          Pastors
                          </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/deacons">
                        <ListItemText>
                          Deacons
                        </ListItemText>
                      </ListItem>

                      <ListItem component={RouterLink} className="subNav" to="/pages/imnew/hillcrest-kids">
                        <ListItemText>
                          Hillcrest Kids
                          </ListItemText>
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
              </Grid>
            </ClickAwayListener>
          )}
          {/* SERVE MENU */}
          {anchor === "Serve" && (
            <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
              justify="space-around" alignContent="center" aria-label="Serve Resources">
              {/* SERVE: Sub Menu 1 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary">
                  <strong>Become a Member</strong>
                </Typography>

                <Typography variant="subtitle2">
                  <List dense disablePadding>
                    <ListItem component={RouterLink} className="subNav" to="/pages/serve/information">
                      <ListItemText>
                        Information
                      </ListItemText>
                    </ListItem>

                    <ListItem component={RouterLink} className="subNav" to="/pages/serve/my-hillcrest">
                      <ListItemText>
                        MyHillcrest
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
              {/* SERVE: Sub Menu 2 Col 1 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary" align="left">
                  <strong>Join a Team</strong>
                </Typography>

                <Grid container>
                  <Grid item>
                    <Typography variant="subtitle2">
                      <List dense disablePadding>
                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/guest-experience">
                          <ListItemText>
                            Guest Experience
                          </ListItemText>
                        </ListItem>
                        
                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/safety">
                          <ListItemText>
                            Safety
                          </ListItemText>
                        </ListItem>

                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/worship">
                          <ListItemText>
                            Worship
                          </ListItemText>
                        </ListItem>

                        <ListItem className="subNav" to="/pages/serve/production">
                          <ListItemText>
                            Production
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Typography>
                  </Grid>
                  {/* SERVE: Sub Menu 2 Col 2 */}
                  <Grid item>

                    <Typography variant="subtitle2">
                      <List dense disablePadding>
                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/hillcrest-kids">
                          <ListItemText>
                            Hillcrest Kids
                          </ListItemText>
                        </ListItem>

                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/prayer">
                          <ListItemText>
                            Prayer
                          </ListItemText>
                        </ListItem>
                      
                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/care">
                          <ListItemText>
                            Care
                          </ListItemText>
                        </ListItem>

                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/library">
                          <ListItemText>
                            Library
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Typography>
                  </Grid>
                  {/* SERVE: Sub Menu 2 Col 3*/}
                  <Grid item>
                    <Typography variant="subtitle2">
                      <List dense disablePadding>
                        <ListItem component={RouterLink} className="subNav" to="/pages/serve/special-events">
                          <ListItemText>
                            Special Events
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          {/* SUPPORT MENU */}
          {anchor === "Support" && (
            <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
              justify="space-around" alignContent="center" aria-label="Support Resources">
              {/* SUPPORT: Sub Menu 1 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary" align="left">
                  <strong>Give</strong>
                </Typography>

                <Typography variant="subtitle2" style={{ color: "rgb(249, 247, 241)" }}>
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemText>
                        Each of you should give what you have decided <br /> in your heart to give, not reluctantly or under compulsion;<br /> for God loves a cheerful giver. <br />
                        <Typography variant="caption" color="primary">2 Corinthians 9:6-8</Typography>
                      </ListItemText>
                    </ListItem>

                    <Link href="https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true">
                      <ListItem className="subNav">
                        <ListItemText>
                          Give Today
                        </ListItemText>
                      </ListItem>
                    </Link>

                  </List>
                </Typography>
              </Grid>
              {/* SUPPORT: Sub Menu 2 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary" align="left">
                  <strong>Community Involvement</strong>
                </Typography>

                <Typography variant="subtitle2">
                  <List dense disablePadding>
                    <ListItem component={RouterLink} className="subNav" to="/pages/support/charlotte-rescue-mission">
                      <ListItemText>
                        Charlotte Rescue Mission
                      </ListItemText>
                    </ListItem>

                    <ListItem component={RouterLink} className="subNav" to="/pages/support/human-coalition">
                      <ListItemText>
                        Human Coalition
                      </ListItemText>
                    </ListItem>
                  
                    <ListItem component={RouterLink} className="subNav" to="/pages/support/kdm">
                      <ListItemText>
                        King's Daughter's Ministry
                      </ListItemText>
                    </ListItem>

                    <ListItem component={RouterLink} className="subNav" to="/pages/support/mt-holly-community-relief-org">
                      <ListItemText>
                        Mt. Holly Community Relief Organization
                      </ListItemText>
                    </ListItem>
                  
                    <ListItem component={RouterLink} className="subNav" to="/pages/support/paw-creek">
                      <ListItemText>
                        Paw Creek Elementary
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          )}

          {/* SHARE MENU */}
          {anchor === "Share" && (
            <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit", padding: "1rem 0" }}
              justify="space-around" alignContent="center" aria-label="Share Resources">
              {/* SHARE: Sub Menu 1 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" align="left" color="primary">
                  <strong>Gather</strong>
                </Typography>

                <Typography variant="subtitle2">
                  <List dense disablePadding>

                    <ListItem className="subNav">
                      <ListItemText>
                        Sunday School (All ages) <br />
                        <Typography variant="caption" color="primary">
                          Weekly, 09:30am
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem className="subNav">
                      <ListItemText>
                        Sunday Worship Service <br />
                        <Typography variant="caption" color="primary">
                          Weekly, 11:00am
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem className="subNav">
                      <ListItemText>
                        MidWeek Bible Study <br />
                        <Typography variant="caption" color="primary">
                          Wednesdays, 06:30pm
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    
                    <ListItem component={RouterLink} className="subNav" to="/pages/share/d-groups">
                      <ListItemText>
                        Discipleship Groups
                      </ListItemText>
                    </ListItem>
                  </List>

                </Typography>
              </Grid>
              {/* SHARE: Sub Menu 2 */}
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary" align="left">
                  <strong>Learning Resources</strong>
                </Typography>

                <Typography variant="subtitle2">
                  <List dense disablePadding>
                    <ListItem component={RouterLink} className="subNav" to="/pages/share/sermons">
                      <ListItemText>
                        Service Sermons
                      </ListItemText>
                    </ListItem>

                    <ListItem component={RouterLink} className="subNav" to="/pages/share/book-of-the-month">
                      <ListItemText>
                        Book of the Month
                      </ListItemText>
                    </ListItem>
                    
                    <ListItem component={RouterLink} className="subNav" to="/pages/share/365-reading-plan">
                      <ListItemText>
                        365 Reading Plan
                      </ListItemText>
                    </ListItem>

                    <ListItem component={RouterLink} className="subNav" to="/pages/share/e-library">
                      <ListItemText>
                        e-Library
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </span>
    </ClickAwayListener>
  );
}
