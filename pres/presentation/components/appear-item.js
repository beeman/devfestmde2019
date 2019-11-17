import { Appear, ListItem } from "spectacle";
import React from "react";

export const AppearItem = ({ children }) => {
  return (
    <Appear>
      <ListItem style={{ listStyle: "none" }} padding={15}>
        { children }
      </ListItem>
    </Appear>
  );
}
