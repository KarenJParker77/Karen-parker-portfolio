import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
      </SectionTitle>
      <SectionText>
        My name's Karen Parker. I'm actively seeking my first junior developer
        role while soaking up as much tech knowledge as I can.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:karen.mccrackle@gmail.com")}
      >
        Email me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
