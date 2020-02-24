import React from "react";
import styled, { keyframes } from "styled-components";
import background from "../images/rsm/back.gif";
import logo from "../images/rsm/hero-logo.png";
import { motion } from "framer-motion";

const HeroWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  font-family: "Fredoka One";
  padding-top: 80px;
  background: radial-gradient(
    var(--color-hero-one),
    var(--color-hero-one-dark)
  );
  position: relative;
  overflow: hidden;
  height: 260px;
  @media (min-width: 1024px) {
    height: 590px;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, #0000005e, transparent);
  }
  #embroidery-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: auto 90%;
    mix-blend-mode: multiply;
    opacity: 0.4;
    z-index: 4;
  }
  #hero-logo-graphics {
    top: -40px;
    left: 0px;
    width: 300px;
    margin-bottom: 80px;
    position: relative;
    z-index: 5;
    opacity: 1;
    @media (min-width: 1024px) {
      width: 686px;
      top: -76px;
    }
  }
`;

const Tagline = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 1em;
  bottom: 18px;
  max-width: 80%;
  color: white;
  z-index: 20;
  @media (min-width: 1024px) {
    font-size: 3em;
    bottom: 45px;
  }
  span {
    background-color: var(--color-accented-hero-background);
    display: inline-block;
    padding: 10px;
    border-radius: 28px;
  }
`;

const logoStates = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0.9 }
};

const tagLineStates = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: -50, scale: 0.9 }
};

const Header = ({ siteTitle }) => (
  <HeroWrapper>
    <motion.img
      id="hero-logo-graphics"
      src={logo}
      initial="hidden"
      animate="visible"
      variants={logoStates}
      transition={{ duration: 1 }}
    />
    <div id="embroidery-overlay"></div>
    <Tagline
      initial="hidden"
      animate="visible"
      variants={tagLineStates}
      transition={{ duration: 1 }}
    >
      Norges største <span>nostalgimesse!</span>
    </Tagline>
  </HeroWrapper>
);

export default Header;
