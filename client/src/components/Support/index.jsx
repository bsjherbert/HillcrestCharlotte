import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  pos: {
    marginBottom: 12,
  },
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

        <Typography variant="body1" component="p">
        
        {props.theObj.text}
        
          <br />
        </Typography>
        {props.theObj.components ? props.theObj.components.map(component => component) : (null)}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
