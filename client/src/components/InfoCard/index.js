import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core';

//style text content here 
const useStyles = makeStyles(theme =>({
  card: {
    width: "23%",
    backgroundColor: theme.palette.secondary.main
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
  }
//   p: {
//       paddingBottom: "2%"
//   }
}));

export default function InfoCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" color="primary">
         Reading Plan
        </Typography>
            <List dense="true">
                <ListItem>
                    <ListItemText>
                    Philippians 1-2
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                    Philippians 3-4
                    </ListItemText>
                </ListItem>
                <ListItem>                
                    <ListItemText>
                    Hebrews 1-2
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                    Hebrews 3-4
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                    Hebrews 5-6
                    </ListItemText>
                </ListItem>
            </List>
        <Typography variant="h6" color="primary">
            Memory Verse
        </Typography>
            <List dense="true" color="textPrimary" className={classes.p}>
                <ListItem>
                    <ListItemText>
                    Philippians 3:7-8 <br /> Hebrews 4:14-16
                    </ListItemText>
                </ListItem>
            </List>
        
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
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
}
