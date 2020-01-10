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
            <RouterLink href="/" to="/" title="Hillcrest Charlotte | Home">
              <HillcrestLogo />
            </RouterLink>
          </span>
          {/* HOME Tab */}
          <Grid item component="span">
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <Link underline="hover" className="navTab" color="textSecondary" variant="h6" href="/"
                title="Home" style={{ cursor: "pointer" }} aria-label="Home" aria-controls="home" aria-haspopup="false">
                Home
              </Link>
            </RouterLink>
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

                      <RouterLink to = "/pages/imnew/about-us">
                        <ListItem className="subNav">
                          <ListItemText>
                            About Us
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/imnew/what-to-expect">
                        <ListItem className="subNav">
                          <ListItemText>
                            What to Expect
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/connection">
                        <ListItem className="subNav">
                          <ListItemText>
                            <Link href="connection" color="inherit">
                              Connection
                            </Link>
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

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

                      <RouterLink to = "/pages/imnew/the-gospel">
                        <ListItem className="subNav">
                          <ListItemText>
                            The Gospel
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/imnew/statement-of-faith">
                        <ListItem className="subNav">
                          <ListItemText>
                            Statement of Faith
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/imnew/constitution">
                        <ListItem className="subNav">
                          <ListItemText>
                            Constitution
                          </ListItemText>
                        </ListItem>
                      </RouterLink>
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

                      <RouterLink to = "/pages/imnew/pastors">
                        <ListItem className="subNav">
                          <ListItemText>
                            Pastors
                           </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/imnew/deacons">
                        <ListItem className="subNav">
                          <ListItemText>
                            Deacons
                          </ListItemText>
                        </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/imnew/hillcrest-kids">
                        <ListItem className="subNav">
                          <ListItemText>
                            Hillcrest Kids
                            </ListItemText>
                        </ListItem>
                      </RouterLink>
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

                      <RouterLink to = "/pages/serve/information">
                    <ListItem className="subNav">
                      <ListItemText>
                        Information
                      </ListItemText>
                    </ListItem>
                      </RouterLink>

                      <RouterLink to = "/pages/serve/my-hillcrest">

                    <ListItem className="subNav">
                      <ListItemText>
                        <Link href="login" color="inherit">
                          MyHillcrest
                        </Link>
                      </ListItemText>
                    </ListItem>
                      </RouterLink>
                      
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

                        <RouterLink to = "/pages/serve/guest-experience">
                        <ListItem className="subNav">
                          <ListItemText>
                            Guest Experience
                          </ListItemText>
                        </ListItem>
                        </RouterLink>
                        
                        <RouterLink to = "/pages/serve/safety">
                        <ListItem className="subNav">
                          <ListItemText>
                            Safety
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                        <RouterLink to = "/pages/serve/worship">
                        <ListItem className="subNav">
                          <ListItemText>
                            Worship
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                        <RouterLink to = "/pages/serve/production">
                        <ListItem className="subNav">
                          <ListItemText>
                            Production
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                      </List>
                    </Typography>
                  </Grid>
                  {/* SERVE: Sub Menu 2 Col 2 */}
                  <Grid item>

                    <Typography variant="subtitle2">
                      <List dense disablePadding>

                        <RouterLink to = "/pages/serve/hillcrest-kids">
                        <ListItem className="subNav">
                          <ListItemText>
                            Hillcrest Kids
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                        <RouterLink to = "/pages/serve/prayer">
                        <ListItem className="subNav">
                          <ListItemText>
                            Prayer
                          </ListItemText>
                        </ListItem>
                        </RouterLink>
                        
                        <RouterLink to = "/pages/serve/care">
                        <ListItem className="subNav">
                          <ListItemText>
                            Care
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                        <RouterLink to = "/pages/serve/library">
                        <ListItem className="subNav">
                          <ListItemText>
                            Library
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

                      </List>
                    </Typography>
                  </Grid>
                  {/* SERVE: Sub Menu 2 Col 3*/}
                  <Grid item>
                    <Typography variant="subtitle2">
                      <List dense disablePadding>

                        <RouterLink to = "/pages/serve/special-events">
                        <ListItem className="subNav">
                          <ListItemText>
                            Special Events
                          </ListItemText>
                        </ListItem>
                        </RouterLink>

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
                    
                  <RouterLink to = "/pages/support/charlotte-rescue-mission">
                    <ListItem className="subNav">
                      <ListItemText>
                        Charlotte Rescue Mission
                      </ListItemText>
                    </ListItem>
                    </RouterLink>


                    <RouterLink to = "/pages/support/human-coalition">
                    <ListItem className="subNav">
                      <ListItemText>
                        Human Coalition
                      </ListItemText>
                    </ListItem>
                    </RouterLink>
                    
                    <RouterLink to = "/pages/support/kdm">
                    <ListItem className="subNav">
                      <ListItemText>
                        King's Daughter's Ministry
                      </ListItemText>
                    </ListItem>
                    </RouterLink>

                    <RouterLink to = "/pages/support/mt-holly-community-relief-organization">
                    <ListItem className="subNav">
                      <ListItemText>
                        Mt. Holly Community Relief Organization
                      </ListItemText>
                    </ListItem>
                    </RouterLink>
                    
                    <Link href="https://schools.cms.k12.nc.us/pawcreekES/Pages/Default.aspx" color="inherit">
                    <ListItem className="subNav">
                      <ListItemText>
                        Paw Creek Elementary
                      </ListItemText>
                    </ListItem>
                    </Link>

                  </List>
                </Typography>
              </Grid>
              {/* SUPPORT: Sub Menu 3
              <Grid item>
                <Typography component="p" variant="subtitle1" color="primary">
                  <strong>Life Services</strong>
                </Typography>

                <Typography variant="subtitle2">
                  <List dense disablePadding>
                    <ListItem className="subNav">
                      <ListItemText>
                        Marriage counseling
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </Grid> */}
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
                    
                    <RouterLink to = "/pages/share/discipleship-group">
                    <ListItem className="subNav">
                      <ListItemText>
                        Discipleship Group (D-Groups)
                      </ListItemText>
                    </ListItem>
                    </RouterLink>
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

                    <RouterLink to = "/pages/share/service-sermons">
                    <ListItem className="subNav">
                      <ListItemText>
                        Service Sermons
                      </ListItemText>
                    </ListItem>
                    </RouterLink>

                    <RouterLink to = "/pages/share/book-of-the-month">
                    <ListItem className="subNav">
                      <ListItemText>
                        Book of the Month
                      </ListItemText>
                    </ListItem>
                    </RouterLink>
                    
                    <RouterLink to = "/pages/share/365-reading-plan">
                    <ListItem className="subNav">
                      <ListItemText>
                        365 Reading Plan
                      </ListItemText>
                    </ListItem>
                    </RouterLink>

                    <RouterLink to = "/pages/share/e-library">
                    <ListItem className="subNav">
                      <ListItemText>
                        e-Library
                      </ListItemText>
                    </ListItem>
                    </RouterLink>

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
