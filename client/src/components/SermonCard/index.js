import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
    width: "100%",
  },
  content: {
    flex: "1 0 auto"
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  
  return (
    <Box boxShadow={3}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardActionArea>
            <CardContent className={classes.content}>
              <Typography variant="h6" color="primary">
                Latest Sermon
              </Typography>
            </CardContent>
            <ReactPlayer url= "https://soundcloud.com/hillcrestclt/confidence-to-enter" width="100%" height="154px"/>
          </CardActionArea>
        </div>
      </Card>
    </Box>
  );
}
