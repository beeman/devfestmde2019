import { ListItem } from "spectacle";
import React from "react";

export const Item = ({ children }) => {
  return (
    <ListItem style={{ listStyle: "none" }} padding={15}>
      { children }
    </ListItem>
  );
}
