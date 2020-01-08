import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export default function NestedList(props) {
    console.log(props)
    const classes = useStyles();
    
    const initOpen = {};
    props.allMenus[props.page].submenus.forEach(all => {
        console.log(all)
        initOpen[all.id] = false;
    })

    const [open, setOpen] = React.useState(initOpen);

    const handleClick = (submenu) => {
        setOpen({
            ...open, [submenu]: !open[submenu]
        });
    };

    return (
        <List
            component="nav"
            aria-labelledby="sideNav"
            subheader={
                <ListSubheader component="menu" id="sideNav">
                    {props.allMenus[props.page].title}
                </ListSubheader>
            }
            className={classes.root}>

            {props.allMenus[props.page].submenus.map(submenu => {
                console.log(open)
                return (
                    <div>
                        <ListItem button onClick={() => handleClick(submenu.id)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={submenu.title} />
                            {open[submenu.id] ? <ExpandLess /> : <ExpandMore />}
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
                            )
                        })}

                    </div>
                )
            })}

        </List>

    );
}
