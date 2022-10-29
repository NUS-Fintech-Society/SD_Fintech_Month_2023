import { HStack } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type Props = {
  color?: string;
};

export default function SocialMediaIcons(props: Props) {
  const iconColor = props.color ?? "black";

  return (
    <HStack spacing="10" color={iconColor}>
      <a
        href="https://fintechsociety.comp.nus.edu.sg"
        target="_blank"
        rel="noreferrer"
      >
        <FaGlobe />
      </a>
      <a
        href="https://www.linkedin.com/company/nus-fintech-society/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.instagram.com/nusfintech/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/NUSfintech/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </HStack>
  );
}
