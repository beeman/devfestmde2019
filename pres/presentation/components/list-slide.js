import { Heading, List, ListItem, Slide } from "spectacle";
import React from "react";

export const ListSlide = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="light">
      <Heading size={6} textColor="secondary" fit>What is GraphQL?</Heading>
      <List>
        <ListItem style={{ listStyle: "none" }} padding={15}>Strongly typed</ListItem>
        <ListItem style={{ listStyle: "none" }} padding={15}>Hierarchical</ListItem>
        <ListItem style={{ listStyle: "none" }} padding={15}>Introspective</ListItem>
        <ListItem style={{ listStyle: "none" }} padding={15}>Transport agnostic</ListItem>
        <ListItem style={{ listStyle: "none" }} padding={15}>Implementation agnostic</ListItem>
      </List>
    </Slide>

  );
}
