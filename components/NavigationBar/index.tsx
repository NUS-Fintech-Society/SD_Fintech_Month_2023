import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import {
  CenterContainer,
  HackathonButton,
  HStackContainer,
  NavBarContainer,
} from "./styles";
import SocialMediaIcons from "../SocialMediaIcons";

import { Text } from "@chakra-ui/react";

export default function NavigationBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <NavBarContainer>
      <CenterContainer>
        <HStackContainer>
          <HStack spacing="20">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src="/FintechSocietyLogo.png"
                  w="150px"
                  minWidth="150px"
                  alt=""
                ></Image>
              </Link>
            </NextLink>
            <SocialMediaIcons />
          </HStack>
          <HStack spacing="20">
            <HStack spacing="10">
              <Button variant="link" colorScheme="black">
                Home
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="black"
                  rightIcon={<ChevronDownIcon />}
                  variant="link"
                >
                  Programme
                </MenuButton>
                <MenuList>
                  <MenuItem>Week Overflow</MenuItem>
                  <MenuItem>Agenda</MenuItem>
                  <MenuItem>Speakers</MenuItem>
                  <MenuItem>Workshops</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="black"
                  rightIcon={<ChevronDownIcon />}
                  variant="link"
                >
                  About
                </MenuButton>
                <MenuList>
                  <MenuItem>About Us</MenuItem>
                  <MenuItem>Contact Us</MenuItem>
                </MenuList>
              </Menu>
              <Button variant="link" colorScheme="black">
                Sponsors
              </Button>
            </HStack>
            <HackathonButton colorScheme="brand">
              Fintech Hackathon
            </HackathonButton>
          </HStack>
        </HStackContainer>
      </CenterContainer>
    </NavBarContainer>
  );
}
