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
import Box from '@material-ui/core/Box';
import ReactPlayer from "react-player";

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
    width: 250,
    height: 245
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
              <Typography variant="subtitle1" color="white">
                Speaker: Brad Herbert
          </Typography>
              <Typography variant="subtitle1" color="white">
                Title: "Confidence to Enter"
          </Typography>
              <Typography variant="subtitle1" color="white">
                Verse: "Hebrews 10:1-25"
          </Typography>
            </CardContent>
              <ReactPlayer url= "https://soundcloud.com/hillcrestclt/confidence-to-enter" width="100%" height="100%" />
          </CardActionArea>
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
