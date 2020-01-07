import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Link} from '@material-ui/core';
import flower from './images/flower.jpg'
import Sidebar from '../../components/sidebarcard'
import { Switch, Route } from "react-router-dom";
import TestComp from "../testComp"
import testComp2 from "../testComp2"

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
   const classes = useStyles();
  return (

    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Sidebar {...props} />
        </Grid>
        <Grid item xs={8}>
          <img src ={flower} width="100%" alt = "plant"/>
            <Switch>
                {/* we are passing the handlepagechange function from the app.js file, but are unable to pass it to the 2nd child component  TestComp*/}
                <Route exact path ="/pages/church" render={(props) => <TestComp {...props} pagechange={props.pagechange} />}/>
                
                <Route exact path ="/pages/biggerchurch" component={testComp2}/>
            </Switch>
        </Grid>

      </Grid>
    </div>
  );
}
export default Pagetemplate
