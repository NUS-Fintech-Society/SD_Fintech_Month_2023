import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import {
  CenterContainer,
  HackathonButton,
  HStackContainer,
  NavBarContainer,
} from './styles';
import SocialMediaIcons from '../SocialMediaIcons';
import { Routes } from '../../constants/Routes.enum';

type Props = {
  navigate: Function;
  hackathon: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function DesktopNavigationBar(props: Props) {
  const { navigate, hackathon } = props;
  const isSmallScreen = useBreakpointValue({ base: true, '2xl': false });

  return (
    <NavBarContainer>
      <CenterContainer>
        <HStackContainer>
          <HStack spacing="20">
            <NextLink href={Routes.HOME} passHref>
              <Link>
                <Image
                  src="/fintechsoc-logo.png"
                  w="150px"
                  minWidth="150px"
                  alt=""
                />
              </Link>
            </NextLink>
            {isSmallScreen ? <></> : <SocialMediaIcons color="white" />}
          </HStack>
          <HStack spacing="20">
            <HStack spacing="10">
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.HOME)}
              >
                HOME
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="black"
                  rightIcon={<ChevronDownIcon />}
                  variant="link"
                >
                  PROGRAMMES
                </MenuButton>
                <MenuList>
                  {/* <MenuItem
                    onClick={navigate(Routes.WEEKOVERVIEW)}
                    style={{ color: '#0C1747' }}
                  >
                    Week Overview
                  </MenuItem> */}
                  <MenuItem
                    onClick={navigate(Routes.PANEL_DISCUSSIONS)}
                    style={{ color: '#0C1747' }}
                  >
                    Panel Discussions
                  </MenuItem>
                  {/* <MenuItem
                    onClick={navigate(Routes.SPEAKERS)}
                    style={{ color: '#0C1747' }}
                  >
                    Speakers
                  </MenuItem> */}
                  <MenuItem
                    onClick={navigate(Routes.WORKSHOPS)}
                    style={{ color: '#0C1747' }}
                  >
                    Workshops
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="black"
                  rightIcon={<ChevronDownIcon />}
                  variant="link"
                >
                  ABOUT US
                </MenuButton>

                <MenuList>
                  <MenuItem
                    onClick={navigate(Routes.ABOUT_US)}
                    style={{ color: '#0C1747' }}
                  >
                    About Us
                  </MenuItem>
                  <MenuItem
                    onClick={navigate(Routes.CONTACT_US)}
                    style={{ color: '#0C1747' }}
                  >
                    Contact Us
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.PARTNERS)}
              >
                SPONSORS
              </Button>

              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.FAQ)}
              >
                FAQ
              </Button>
            </HStack>
            <HackathonButton colorScheme="brand" onClick={hackathon}>
              HACKATHON
            </HackathonButton>
          </HStack>
        </HStackContainer>
      </CenterContainer>
    </NavBarContainer>
  );
}
