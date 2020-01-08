import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

//style text content here
const useStyles = makeStyles(theme => ({
  card: {
    // display: "flex",
    width: "31%",
    backgroundColor: theme.palette.secondary.main
  },
  media: {
    height: 140,
  },
  details: {
    //   display: "flex",
      flexDirection: "column",
  },
  content: {
      flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));


  export default function SermonCard() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
  const theme = useTheme();

  return (
    
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/images/SermonCard.jpg"
        title="Contemplative Reptile"
      />
     <div className={classes.details}>
        <CardContent className={classes.content}>
        <Typography variant="h6" color="primary">
          Sermon
        </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/images/ReadingPlan.jpg"
        title="Live from space album cover"
      />
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
    
  
    
     
 
    
  );
  };
