import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link } from '@material-ui/core';
import flower from './images/flower.jpg'
import Sidebar from '../../components/sidebarcard'
import { Switch, Route } from "react-router-dom";
import ImNew from "../ImNew"
import Connect from "../Connect"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Pagetemplate = (props) => {
  console.log(props, '<====>')
  const classes = useStyles();
<<<<<<< Updated upstream
  const [currentPage, setPage] = useState("imnew")

  const propsToPass = props.allMenus
  return (
    <div className={classes.root} style={{position: "relative", top: "3vh", zIndex: 5}}>
=======
  const [currentPage, setPage] = useState(0)

  return (

    <div className={classes.root}>
>>>>>>> Stashed changes
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Sidebar {...props} page={currentPage} />
        </Grid>
        <Grid item xs={8}>
          <img src={flower} width="100%" alt="plant" />
          <Switch>
<<<<<<< Updated upstream

            <Route path="/pages/:cat/:page" render={(props) => {
              setPage(props.match.params.cat)
              console.log(props.match.params.page)
              let holder
              propsToPass[props.match.params.cat].submenus.forEach((element, id) => {
                element.links.forEach((subElement, subId) => {
                  if (subElement.short === props.match.params.page) {
                    holder = {id:id, subId: subId}
                  }
                })
              })
              console.log(holder)
              const theInfo = propsToPass[props.match.params.cat].submenus[holder.id].links[holder.subId]
            return<ImNew {...props} page={props.match.params.page} theObj={theInfo} cat={props.match.params.cat} />}}
             />

             <Route exact path="/pages/imnew/about-us" render={(props) => {
              console.log(this.props.path)
              return <ImNew {...props} pageEquals={setPage} />
            }} />

=======
            {/* This is the "IM NEW" => welcome to hillcrest*/}
            <Route exact path="/pages/About-Us" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/What-to-Expect" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Connection-Card" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Contact-Us" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            {/* This is the "IM NEW" => Our Beliefs*/}
            <Route exact path="/pages/The-Gospel" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Statement-of-Faith" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Constitution" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            {/* This is the "IM NEW" => LeadershipTeam*/}
            <Route exact path="/pages/Pastors" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Deacons" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />
            <Route exact path="/pages/Hillcrest-Kids" render={(props) => {
              return <ImNew {...props} pageEquals={setPage} />
            }} />

>>>>>>> Stashed changes
          </Switch>
        </Grid>

      </Grid>
    </div>
  );
}
export default Pagetemplate
