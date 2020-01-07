import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ReadingItems = ({verses}) => {
    return ( 
        verses && 
        verses.map( (verse, key) => (
          <ListItem>
            <ListItemText>
             {verse}
            </ListItemText>
          </ListItem>
        ))
    )
}

export default ReadingItems;