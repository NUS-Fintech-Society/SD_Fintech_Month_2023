import { ChevronDownIcon } from '@chakra-ui/icons';
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
import { useRouter } from 'next/router';
import { Routes } from '../../constants/Routes';

export default function NavigationBar() {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  function navigate(path: Routes) {
    return () => {
      router.push(path);
    };
  }

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
                ></Image>
              </Link>
            </NextLink>
            <SocialMediaIcons />
          </HStack>
          <HStack spacing="20">
            <HStack spacing="10">
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.HOME)}
              >
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
                  <MenuItem onClick={navigate(Routes.HOME)}>
                    Week Overflow
                  </MenuItem>
                  <MenuItem onClick={navigate(Routes.HOME)}>Agenda</MenuItem>
                  <MenuItem onClick={navigate(Routes.HOME)}>Speakers</MenuItem>
                  <MenuItem onClick={navigate(Routes.HOME)}>Workshops</MenuItem>
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
                  <MenuItem onClick={navigate(Routes.HOME)}>About Us</MenuItem>
                  <MenuItem onClick={navigate(Routes.HOME)}>
                    Contact Us
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                variant="link"
                colorScheme="black"
                onClick={navigate(Routes.SPONSORS)}
              >
                Sponsors
              </Button>
            </HStack>
            <HackathonButton
              colorScheme="brand"
              onClick={navigate(Routes.HOME)}
            >
              Fintech Hackathon
            </HackathonButton>
          </HStack>
        </HStackContainer>
      </CenterContainer>
    </NavBarContainer>
  );
}
