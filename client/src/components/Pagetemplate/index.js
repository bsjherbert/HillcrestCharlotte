import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Link} from '@material-ui/core';
import flower from './images/flower.jpg'
import Sidebar from '../../components/sidebarcard'
import { Switch, Route } from "react-router-dom";
import ImNew from "../ImNew"
import Connect from "../Connect"

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
    console.log(props, '<====>')
   const classes = useStyles();
    const [currentPage, setPage] = useState(0)

 return (
    
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Sidebar {...props} page={currentPage}  />
        </Grid>
        <Grid item xs={8}>
          <img src ={flower} width="100%" alt = "plant"/>
            <Switch>
                {/* This is the "IM NEW" => welcome to hillcrest*/}
                <Route exact path = "/pages/About-Us"  render= {(props) =>{
                    return <ImNew {...props} pageEquals = {setPage} />
                }}/>
                <Route exact path = "/pages/What-to-Expect" render= {(props) => {
                    return <ImNew {...props} pageEquals = {setPage}/>
                }}/>
                <Route exact path = "/pages/Connection-Card" render= {(props) => {
                    return <ImNew {...props} pageEquals = {setPage}/>
                }}/>
                <Route exact path = "/pages/Contact-Us" render = {(props) =>{
                    return <ImNew {...props} pageEquals = {setPage}/>
                }}/>
                 {/* This is the "IM NEW" => Our Beliefs*/}
                 <Route exact path = "/pages/The-Gospel" render = {(props) =>{
                     return <ImNew {...props} pageEquals={setPage}/>
                 }}/>
                 <Route exact path = "/pages/Statement-of-Faith" render = {(props) =>{
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>
                 <Route exact path = "/pages/Constitution" render = {(props) =>{
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>
                 {/* This is the "IM NEW" => LeadershipTeam*/}
                 <Route exact path = "/pages/Pastors" render = {(props) =>{
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>
                 <Route exact path = "/pages/Deacons" render = {(props) => {
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>
                 <Route exact path = "/pages/Hillcrest-Kids" render = {(props) => {
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>
                 {/* This is the "Connect" => */}
                 <Route exact path = "/pages/Information" render = {(props) => {
                     return <ImNew {...props} pageEquals = {setPage}/>
                 }}/>

            </Switch>
        </Grid>

      </Grid>
    </div>
  );
}
export default Pagetemplate
