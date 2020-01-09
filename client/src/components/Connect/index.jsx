import React from 'react';
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

export default function ImNew(props) {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

React.useEffect(() => {
 props.pageEquals(1)
})

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h3" component="p">
          Add title here
        </Typography>
        <Typography variant="h4" component="p">
          Add subtitle here
        </Typography>
        <Typography variant="body1" component="p">
          Add text here
          <br />
        </Typography>
        <Typography variant="h4" component="p">
          Add subtitle here
        </Typography>
        <Typography variant="body1" component="p">
          Add text here
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
