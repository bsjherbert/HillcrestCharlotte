import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Connect(props) {
  const classes = useStyles();
  console.log(props)

React.useEffect(() => {
  props.theObj.content.replace(/\.(?=[A-Z])/g, '</p><p>')
  console.log(props.theObj.content)
 })
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.theObj.title}
        </Typography>

        <Typography variant="h4" component="p">
          {props.theObj.test}
        </Typography> 
        <Typography variant="body1" component="p">
        
        {props.theObj.content}
        
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}