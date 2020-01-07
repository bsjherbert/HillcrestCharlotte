import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Link} from '@material-ui/core';
import flower from './images/flower.jpg'
import Sidebar from '../../components/sidebarcard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const  Pagetemplate = (props)=> {
    const [menu, setMenu] = React.useState(null);

   const classes = useStyles();
   const MainComp = props.main
   const allMenus = [
    {
        title: "Im a Title",
        submenus: [
            {
                 title: "Welcome to Hillcrest",
                 id: "welcomeHillcrest",
                 links: [
                     {
                         title: "About Us",
                         href:"#"
                     },
                     {
                         title: "What to Expect",
                         href:"#"
                     }
                 ]
            },
            {
             title: "Our beliefs",
             id: "ourBeliefs",
             links: [
                 {
                     title: "The Gospel",
                     href:"#"
                 },
                 {
                     title: "Statement",
                     href:"#"
                 }
             ]
        }
        ]
    },
    {
        title: "Im a Title",
        submenus: [
            {
                 title: "Welcome to Hillcrest",
                 id: "welcomeHillcrest",
                 links: [
                     {
                         title: "About Us",
                         href:"#"
                     },
                     {
                         title: "What to Expect",
                         href:"#"
                     }
                 ]
            },
            {
             title: "Our beliefs",
             id: "ourBeliefs",
             links: [
                 {
                     title: "The Gospel",
                     href:"#"
                 },
                 {
                     title: "Statement",
                     href:"#"
                 }
             ]
        }
        ]
    }
   ]

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Sidebar menu={testmenu} />
        </Grid>
        <Grid item xs={8}>
          <img src ={flower} width="100%" alt = "plant"/>
            <MainComp/> 
        </Grid>

      </Grid>
    </div>
  );
}
export default Pagetemplate
