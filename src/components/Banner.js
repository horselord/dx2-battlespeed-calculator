import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import logo from "../dx2-icon.jpg";

const Banner = () => (
  <Segment
    secondary
    vertical
    inverted
    style={{ background: "transparent" }}
    textAlign="center"
  >
    <Image src={logo} inline size="mini" avatar />
    <Header size="huge" style={{ color: "#fef6d5" }}>
      Dx2 Battle Speed Calculator
    </Header>
    <Header sub style={{ color: "#fef6d5", marginTop: "0.1rem" }}>
      Shin Megami Tensei: Dx2 Liberation
    </Header>
  </Segment>
);

export default Banner;
