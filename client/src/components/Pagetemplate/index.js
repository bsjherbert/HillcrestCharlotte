import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const  Pagetemplate=(props)=> {
  const classes = useStyles();
   const MainComp = props.main
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Sidebar/>
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
