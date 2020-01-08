import React, { useState, useRef } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Link, Typography } from '@material-ui/core';
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


export default function MainNavnavTabs(props) {
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

      document.addEventListener("click", handleClose)
    }
  }

  const handleClose = event => {
    if (mainNav.current === null || anchor === event.currentTarget.title || !mainNav.current.contains(event.target)) {
      setAnchor(null)
      setShowMenu("")

      document.removeEventListener("click", handleClose)
    }
  }

  return (
    <div >
    <span ref={mainNav} aria-label="main navigation">
      <Grid container component="span" disableGutters
        direction="row"
        justify="space-around"
        alignItems="center" className={classes.navTabs}>
        <span style={{ float: "left", maxHeight: "25%", maxWidth: "25%", padding: "0.5rem" }}>
          <RouterLink href="/" to="/" title="Hillcrest Charlotte | Home">
            <HillcrestLogo />
          </RouterLink>
        </span>
        <Grid item component="span">
          <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
            title="Home" href="/" to="/" style={{ cursor: "pointer"}} aria-label="Home" aria-controls="home" aria-haspopup="false">
            Home
          </Link>
        </Grid>
        <Grid item component="span">
          <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
            title="I'm New" style={{ cursor: "pointer" }} aria-label="I'm New" aria-controls="new-menu" aria-haspopup="false" onClick={handleOpen}>
            I'm New
          </Link>
        </Grid>
        <Grid item component="span">
          <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
            title="Connect" style={{ cursor: "pointer" }} aria-label="Connection Resources" aria-controls="connect-menu" aria-haspopup="false" onClick={handleOpen}>
            Connect
          </Link>
        </Grid>
        <Grid item component="span">
          <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
            title="Learn" style={{ cursor: "pointer" }} aria-label="Learning Resources" aria-controls="learn-menu" aria-haspopup="false" onClick={handleOpen}>
            Learn
          </Link>
        </Grid>
        <Grid item component="span">
          <Link underline="hover" className="navTab" color="textSecondary" variant="h6"
            title="Serve" style={{ cursor: "pointer" }} aria-label="Serve Resources" aria-controls="serve-menu" aria-haspopup="false" onClick={handleOpen}>
            Serve
          </Link>
        </Grid>
      </Grid>


      <Box className={`dropNav ${showMenu && 'show'}`}>
        {/* NEW MENU */}
        {anchor === "I'm New" && (
          <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
            justify="space-around" alignContent="center" aria-label="Visitor Resources">
            {/* NEW: Sub Menu 1 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary">
                <strong>Welcome to Hillcrest</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>

                  <RouterLink to="/pages/About-Us">
                  <ListItem className="subNav">
                    <ListItemText>
                      About Us
                    </ListItemText>
                  </ListItem>
                  </RouterLink>

                  <RouterLink to = "/pages/What-to-Expect">
                  <ListItem className="subNav">
                    <ListItemText>
                      What to Expect
                    </ListItemText>
                  </ListItem>                  
                  </RouterLink>

                <RouterLink to = "/pages/Connection-Card">
                  <ListItem className="subNav">
                    <ListItemText>
                      <Link href="connection" color="inherit">
                        Connection Card
                      </Link>
                    </ListItemText>
                  </ListItem>
                  </RouterLink>

                  <RouterLink to = "/pages/Contact-Us">
                  <ListItem className="subNav">
                    <ListItemText>
                      Contact Us
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
                  <ListItem className="subNav">
                    <ListItemText>
                      The Gospel
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Statement of Faith
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
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
                  <ListItem className="subNav">
                    <ListItemText>
                      Pastors
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Deacons
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Hillcrest Kids
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        )}
        {/* CONNECT MENU */}
        {anchor === "Connect" && (
          <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
            justify="space-around" alignContent="center" aria-label="Visitor Resources">
            {/* CONNECT: Sub Menu 1 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary">
                <strong>Become a Member</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Information
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            {/* CONNECT: Sub Menu 2 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary" align="left">
                <strong>Join a Group</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Bible Study
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Hillcrest Kids
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Discipleship Groups
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            {/* CONNECT: Sub Menu 3 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary" align="left">
                <strong>Life Services</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Marriage Counseling
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        )}
      {/* LEARN MENU */}
        {anchor === "Learn" && (
          <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit", padding: "1rem 0" }}
            justify="space-around" alignContent="center" aria-label="Visitor Resources">
            {/* LEARN: Sub Menu 1 */}
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

                  <ListItem className="subNav">
                    <ListItemText>
                      Discipleship Group (D-Groups)
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            {/* LEARN: Sub Menu 2 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary" align="left">
                <strong>Resources</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Service Sermons
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Book of the Month
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      365 Reading Plan
                    </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      e-Library
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        )}

        {anchor === "Serve" && (
          <Grid container direction="row" alignItems="flex-start" style={{ height: "inherit", width: "inherit" }}
            justify="space-around" alignContent="center" aria-label="Visitor Resources">
            {/* SERVE: Sub Menu 1 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary">
                <strong>Welcome to Hillcrest</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Connection Card
                  </ListItemText>
                  </ListItem>
                  <ListItem className="subNav">
                    <ListItemText>
                      What to Expect
                  </ListItemText>
                  </ListItem>
                  <ListItem className="subNav">
                    <ListItemText>
                      FAQs
                  </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            {/* SERVE: Sub Menu 2 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary" align="left">
                <strong>Our Beliefs</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      The Gospel
                  </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Statement of Faith
                  </ListItemText>
                  </ListItem>

                  <ListItem className="subNav">
                    <ListItemText>
                      Constitution
                  </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            {/* SERVE: Sub Menu 3 */}
            <Grid item>
              <Typography component="p" variant="subtitle1" color="primary">
                <strong>Leadership Team</strong>
              </Typography>

              <Typography variant="subtitle2">
                <List dense disablePadding>
                  <ListItem className="subNav">
                    <ListItemText>
                      Elders
                  </ListItemText>
                  </ListItem>
                  <ListItem className="subNav">
                    <ListItemText>
                      Deacons
                  </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        )}

      </Box>
    </span>
    </div>
  );
}
