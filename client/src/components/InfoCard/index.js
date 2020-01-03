import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//style text content here 
const useStyles = makeStyles({
  card: {
    width: "23%",
    backgroundColor: "brown"
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

export default function InfoCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Reading Plan
        </Typography>
        Philippians 1-2
        Philippians 3-4
        Hebrews 1-2
        Hebrews 3-4
        Hebrews 5-6
        <Typography className={classes.title} color="textSecondary"gutterBottom>
            Memory Verse
        </Typography>
        Philippians 3:7-8; Hebrews 4:14-16
        <Typography className={classes.title} color="textSecondary"gutterBottom>
            New City Catechism, Week 48
        </Typography>
        www.newcitycatechism.com
        {/* edit text content here */}
        {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
