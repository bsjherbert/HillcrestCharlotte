import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  title2:{
    fontSize:14,
  },
  pos: {
    marginBottom: 12,
  },
  p: {}
}));

export default function Connect(props) {
  const classes = useStyles();
  console.log(props)

React.useEffect(() => {
  console.log(props.theObj.content)
 })
  return (
    <Box boxShadow={1}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.theObj.title}
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.suntitle}
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.pctitle}
        </Typography>

        <Typography variant="body1" component="p" className={classes.p}>        
        {props.theObj.text}
          <br />
          <br />
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.wstitle}
        </Typography>

        <Typography variant="body1" component="p"className={classes.p} >
        {props.theObj.text1}
          <br />
          <br/>
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.bibtitle}
        </Typography>

        <Typography variant="body1" component="p"className={classes.p} >
        {props.theObj.text2}
          <br />
          <br/>
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.strtitle}
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.title3}
        </Typography>

        <Typography variant="body1" component="p"className={classes.p}>
        {props.theObj.text3}
          <br />
          <br />
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.dstitle}
        </Typography>


        <Typography variant="body1" component="p"className={classes.p}>
        {props.theObj.text4}
          <br />
          <br />
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.gotitle}
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.title5}
        </Typography>

        <Typography variant="body1" component="p"className={classes.p}>
        {props.theObj.text5}
          <br />
          <br />
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.sftitle}
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.pktitle}
        </Typography>
       
        <Typography variant="body1" component="p"className={classes.p}>
        {props.theObj.text6}
          <br />
          <br />
        </Typography>

        <Typography className={classes.title2} color="textSecondary" gutterBottom>
          {props.theObj.cititle}
        </Typography>

        <Typography variant="body1" component="p"className={classes.p}>
        {props.theObj.text7}
          <br />
          <br />
        </Typography>

        {props.theObj.components ? props.theObj.components.map(component => component) : (null)}
      </CardContent>
    </Card>
    </Box>
  );
}
