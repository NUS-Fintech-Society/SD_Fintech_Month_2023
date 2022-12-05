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
};

export default function DesktopNavigationBar(props: Props) {
  const { navigate } = props;
  const isSmallScreen = useBreakpointValue({ base: true, '2xl': false });

  return (
    <NavBarContainer>
      <CenterContainer>
        <HStackContainer>
          <HStack spacing="20">
            <NextLink href={Routes.HOME} passHref>
              <Link>
                <Image
                  src="/FintechSocietyLogo.png"
                  w="150px"
                  minWidth="150px"
                  alt=""
                />
              </Link>
            </NextLink>
            {isSmallScreen ? <></> : <SocialMediaIcons />}
          </HStack>
          <HStack spacing="20">
            <HStack spacing="10">
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
                  <MenuItem onClick={navigate(Routes.WIP)}>
                    Week Overview
                  </MenuItem>
                  <MenuItem onClick={navigate(Routes.WIP)}>Mentors</MenuItem>
                  <MenuItem onClick={navigate(Routes.WIP)}>Speakers</MenuItem>
                  <MenuItem onClick={navigate(Routes.WIP)}>Workshops</MenuItem>
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
                  <MenuItem onClick={navigate(Routes.ABOUT_US)}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={navigate(Routes.CONTACT_US)}>
                    Contact Us
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.PARTNERS)}
              >
                Partners
              </Button>
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.FAQ)}
              >
                FAQ
              </Button>
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.WIP)}
              >
                Resources
              </Button>
            </HStack>
            <HackathonButton colorScheme="brand" onClick={navigate(Routes.WIP)}>
              Fintech Hackathon
            </HackathonButton>
          </HStack>
        </HStackContainer>
      </CenterContainer>
    </NavBarContainer>
  );
}
