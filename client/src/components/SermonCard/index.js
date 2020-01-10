import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { CardActionArea } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 350
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "100%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px"
  },
  playIcon: {
    height: 38,
    width: 38
  },
  info: {
    color: theme.palette.background.default
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box boxShadow={3}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardActionArea>
            <CardContent className={classes.content}>
              <Typography variant="h6" color="primary">
                Sermon
              </Typography>
              <Typography variant="subtitle1" className={classes.info}>
                Speaker: Brad Herbert
              </Typography>
              <Typography variant="subtitle1" className={classes.info}>
                Title: "Confidence to Enter"
              </Typography>
              <Typography variant="subtitle1" className={classes.info}>
                Verse: "Hebrews 10:1-25"
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/images/SermonCardMic5.jpg"
          title="Live from space album cover"
        />
      </Card>
    </Box>
  );
}
