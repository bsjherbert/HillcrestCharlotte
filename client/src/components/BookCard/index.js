import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { Button, Typography, Box } from "@material-ui/core";

//style text content here
const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.background.default,
    minHeight: "350px",
    maxHeight: "350px",
  },
  media: {
    height: 165
  },
  button: {
    justifyContent: "center",
    marginBottom: "2%"
  }
}));

export default function BookCard() {
  const classes = useStyles();

  return (
    <Box boxShadow={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/BookCardSing.png"
          title="Book of the Month"
        />
        <CardContent>
          <Typography component="header" variant="h6" color="primary" style={{ paddingBottom: "2%" }}>
            Book of the Month
        </Typography>
          {/* Book Info: Author & Title */}
          <Typography variant="body2" component="p" color="textSecondary">
            God intends for this compelling vision of His people singing—a
            people joyfully joining together in song with brothers and sisters
            around the world and around his heavenly throne—to include you.
        </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Button color="secondary">
            Share
          </Button>
          <Button color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
