import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Api from "../../lib/API";
import ReadingItems from "./ReadingItems";

//style text content here
const useStyles = makeStyles(theme => ({
  card: {
    width: "23%",
    backgroundColor: theme.palette.secondary.main
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
  //   p: {
  //       paddingBottom: "2%"
  //   }
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" color="primary">
          Reading Plan
        </Typography>
        <List dense="true">
          {readingPlanArr.length && (
            <ReadingItems verses={readingPlanArr[weekNumber].dailyVerses} />
          )}
        </List>
        <Typography variant="h6" color="primary">
          Memory Verse
        </Typography>
        <List dense="true" color="textPrimary" className={classes.p}>
          {readingPlanArr.length && (
            <ReadingItems verses={readingPlanArr[weekNumber].memoryVerses} />
          )}
        </List>
      </CardContent>
      <CardActions>
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ReadingCard;
