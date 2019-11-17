import React from "react";
import { Heading, Image, Slide } from "spectacle";
import { HighCard } from "./high-card";

export const ImageSlide = ({ children, title, src}) => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="light">
      <Heading size={5} textColor="secondary">
        {title}
      </Heading>
      <HighCard>
        {children}
        <Image
          src={src}
          style={{ height: "100%", marginTop: 30 }}
        />
      </HighCard>
    </Slide>
  );
};
