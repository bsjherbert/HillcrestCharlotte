import React from "react";
import { ListItem, ListItemText, Typography } from "@material-ui/core";

const ReadingItems = ({ verses }) => {
  return (
    verses &&
    verses.map((verse, key) => (
      <ListItem
        style={{
          paddingTop: "0px !important",
          paddingBottom: "0px !important"
        }}
      >
        <ListItemText className="verses">
          <Typography
            fontSize={14}
            style={{
              paddingTop: "0px !important",
              paddingBottom: "0px !important"
            }}
          >
            {verse}
          </Typography>
        </ListItemText>
      </ListItem>
    ))
  );
};

export default ReadingItems;
