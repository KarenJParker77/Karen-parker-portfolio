import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { TfiBriefcase } from "react-icons/tfi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ff00ff",
            marginBottom: "40",
          }}
        >
          <TfiBriefcase size="3rem" /> <Div4>Portfolio</Div4>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="./KPCV.pdf">
          <NavLink>CV</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/KarenJParker77">
        <AiFillGithub size="3rem" style={{ color: "#ff00ff" }} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/karen-parker-152013117/">
        <AiFillLinkedin size="3rem" style={{ color: "#ff00ff" }} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
