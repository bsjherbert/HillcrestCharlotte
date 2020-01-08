import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

//style text content here
const useStyles = makeStyles(theme => ({
  card: {
    // width: "31%",
    backgroundColor: theme.palette.secondary.main,
    minHeight: "350px",
    maxHeight: "350px"
  },
  media: {
    height: 140
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
  },
  button: {
    justifyContent: "center"
  }
}));

export default function BookCard() {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/BookCardSing.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h6" color="primary">
            Book of the Month
          </Typography>
          <Typography variant="body2" color="white" component="p">
            God intends for this compelling vision of His people singing—a
            people joyfully joining together in song with brothers and sisters
            around the world and around his heavenly throne—to include you.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
