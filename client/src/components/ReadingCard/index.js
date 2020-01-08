import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { Typography, List, Button } from "@material-ui/core";

import Api from "../../lib/API";
import ReadingItems from "./ReadingItems";
// import Grid from "@material-ui/core/Grid"

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

//style text content here
const useStyles = makeStyles(theme => ({
  card: {
    width: "31%",
    backgroundColor: theme.palette.secondary.main
  },
  media: {
    height: 140,
  },
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)"
  // },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
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
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    
      
    
    <Card className={classes.card}>

<CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/ReadingPlanCard2.jpg"
          title="Contemplative Reptile"
        />
       
      <CardContent>
        <Typography variant="h6" color="primary">
          Reading Plan
        </Typography>
        <List dense={true}>
          {readingPlanArr.length && (
            <ReadingItems verses={readingPlanArr[weekNumber].dailyVerses} />
          )}
        </List>
        <Typography variant="h6" color="primary">
          Memory Verse
        </Typography>
        <List dense={true} color="textPrimary" className={classes.p}>
          {readingPlanArr.length && (
            <ReadingItems verses={readingPlanArr[weekNumber].memoryVerses} />
          )}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href="#readingplan" to="#">Full Plan</Button>
      </CardActions>
      </CardActionArea>
 

      
    </Card>

    
  );
};

export default ReadingCard;
