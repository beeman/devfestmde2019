import {
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import React from "react";

import beemanJpg from "../../assets/img/beeman.jpg";

export const AboutMe = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading
        size={5}
        style={{ marginTop: 10, marginBottom: 10 }}
        textColor="secondary"
      >
        Bram Borggreve
      </Heading>
      <Heading
        size={5}
        style={{ marginTop: 10, marginBottom: 10 }}
        textColor="pink"
      >
        beeman 🐝
      </Heading>

      <Layout>
        <Fill style={{ flex: 15 }}>
          <Image
            src={beemanJpg}
            style={{ width: 280, marginTop: 20, borderRadius: "50%" }}
          />
        </Fill>
        <Fill style={{ flex: 20 }}>
          <List
            bgColor="primary"
            textColor="secondary"
            style={{ listStyleType: "none" }}
          >
            <ListItem style={{ marginBottom: 30, fontSize: 32 }}>
              🇳🇱&nbsp;&nbsp;&nbsp;The Netherlands
            </ListItem>
            <ListItem style={{ marginBottom: 30, fontSize: 32 }}>
              👨‍💻&nbsp;&nbsp;&nbsp;Full-stack Developer
            </ListItem>
            <ListItem style={{ marginBottom: 30, fontSize: 32 }}>
              👨‍🏫&nbsp;&nbsp;&nbsp;Mentor / Instructor
            </ListItem>
            <ListItem style={{ marginBottom: 30, fontSize: 32 }}>
              📖&nbsp;&nbsp;&nbsp;Author
            </ListItem>
          </List>
        </Fill>
      </Layout>
      <Text size={5} textColor="pink" style={{ paddingTop: 50 }}>
        <i className="fa fa-fw fa-twitter" /> beeman_nl &nbsp;
        <i className="fa fa-fw fa-github" /> beeman
      </Text>
    </Slide>
  );
};
