import { Appear, Fill, Layout } from "spectacle";
import React from "react";

export const RatingItem = ({ children, value }) => {
  const rate = (number) => {
    let rating = "";
    for (let i = 0; i < number; i++) {
      rating = `${rating} 🐝`;
    }
    return rating;
  };
  return (
    <Appear>
      <div style={{ backgroundColor: "#4C566A", padding: "15px", marginTop: "25px", textAlign: "left", border: "0px solid red" }}>
        <Layout>
          <Fill> {children} </Fill>
          <Fill>
            <div style={{ letterSpacing: "20px" }}>
              <Appear>
                <div>
                  {rate(value)}
                </div>
              </Appear>
            </div>
          </Fill>
        </Layout>
      </div>
    </Appear>
  );
}
