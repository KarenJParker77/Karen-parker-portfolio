import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{ color: "#ff00ff" }}>Email</LinkTitle>
          <LinkItem
            href="mailto:karen.mccrackle@gmail.com"
            style={{ color: "#ff00ff" }}
          >
            karen.mccrackle@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com/KarenJParker77">
          <AiFillGithub size="3rem" style={{ color: "#ff00ff" }} />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/karen-parker-152013117/">
          <AiFillLinkedin size="3rem" style={{ color: "#ff00ff" }} />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
