import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { Typography, List, Button } from "@material-ui/core";

import Api from "../../lib/API";
import ReadingItems from "./ReadingItems";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';

//style text content here
const useStyles = makeStyles(theme => ({
  box: {
    height: "100%"
  },
  card: {
    height: "100%",
    backgroundColor: theme.palette.background.default
  },
  media: {
    height: 165,

  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  gridList: {
    width: 500,
    height: 450
  },
  button: {
    justifyContent: "center",
    paddingTop: "15px"
  }
}));

const ReadingCard = props => {
  function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }
  var result = getWeekNumber(new Date());
  const weekNumber = result[1] - 1;

  const [readingPlanArr, setReadingPlanArr] = useState([]);

  useEffect(() => {
    async function fetchData() {
      Api.ReadingPlan.get().then(result => {
        setReadingPlanArr(result.data);
      });
    }
    fetchData();
  }, []);

  const classes = useStyles();

  return (

    <Box className={classes.box} boxShadow={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/ReadingPlanCard2.jpg"
          title="Reading Desk 2020"
        />

        <CardContent>
          <Typography variant="h6" color="primary">
            Weekly Reading Plan
          </Typography>
          <List dense="true">
            {readingPlanArr.length && (
              <ReadingItems verses={readingPlanArr[weekNumber].dailyVerses} />
            )}
          </List>

          <Typography variant="h6" color="primary">
            Weekly Memory Verse
          </Typography>
          <List dense="true" className={classes.p}>
            {readingPlanArr.length && (
              <ReadingItems verses={readingPlanArr[weekNumber].memoryVerses} />
            )}
          </List>
        </CardContent>
        <CardActionArea>
          <CardActions className={classes.button}>
            <Button color="secondary">
              Share
            </Button>
            <Button color="secondary">
              Learn More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ReadingCard;
