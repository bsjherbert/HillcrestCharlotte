import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import {
  InboxRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  StarBorder
} from "@material-ui/icons";
// import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    zIndex: 5,
    backgroundColor: theme.palette.background.default,
    marginRight: theme.spacing(4)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList(props) {
  console.log(props);
  const classes = useStyles();

  const initOpen = {};
  props.allMenus[props.page].submenus.forEach(all => {
    console.log(all);
    initOpen[all.id] = false;
  });

  const [open, setOpen] = React.useState(initOpen);

  const handleClick = submenu => {
    setOpen({
      ...open,
      [submenu]: !open[submenu]
    });
  };

  return (
    <Box boxShadow={1}>
    <List
      component="nav"
      aria-labelledby="sideNav"
      subheader={
        <ListSubheader
          style={{ marginBlockStart: 0 }}
          component="menu"
          id="sideNav"
        >
          {props.allMenus[props.page].title}
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.allMenus[props.page].submenus.map(submenu => {
        console.log(open);
        return (
          <div>
            <ListItem button onClick={() => handleClick(submenu.id)}>
              <ListItemIcon>
                <InboxRounded />
              </ListItemIcon>
              <ListItemText primary={submenu.title} />
              {open[submenu.id] ? <ExpandLessRounded /> : <ExpandMoreRounded />}
            </ListItem>

            {submenu.links.map(link => {
              return (
                <RouterLink to={link.href}>
                  <Collapse in={open[submenu.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={link.title} />
                      </ListItem>
                    </List>
                  </Collapse>
                </RouterLink>
              );
            })}
          </div>
        );
      })}
    </List>
    </Box>
  );
}
