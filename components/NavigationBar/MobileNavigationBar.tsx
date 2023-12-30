import NextLink from 'next/link';
import React from 'react';
import {
  Button,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  HStackContainer,
  MobileNavBarContainer,
  MobileCenterContainer,
  MobileHackathonButton,
} from './styles';
import { Routes } from '../../constants/Routes.enum';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  navigate: Function;
  hackathon: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function MobileNavigationBar(props: Props) {
  const { navigate, hackathon } = props;

  return (
    <MobileNavBarContainer>
      <MobileCenterContainer>
        <HStackContainer>
          <NextLink href={Routes.HOME} passHref>
            <Link>
              <div className="relative">
                <Image
                  src="/logo_bg.png"
                  w="50px"
                  alt="Fintech Summit 2024"
                  className="rounded-full z-10 relative"
                />
                <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-br from-[#faa307] via-[#f3ecdb] to-[#e6be84] "></div>
              </div>
            </Link>
          </NextLink>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="black"
              rightIcon={<HamburgerIcon boxSize="1.3em" color="white" />}
              variant="link"
            />
            <MenuList>
              <MenuItem onClick={navigate(Routes.HOME)}>Home</MenuItem>
              <MenuDivider />
              {/* <MenuItem onClick={navigate(Routes.WEEKOVERVIEW)}>
                Week Overview
              </MenuItem> */}
              <MenuItem onClick={navigate(Routes.PANEL_DISCUSSIONS)}>
                Panel Discussions
              </MenuItem>
              {/* <MenuItem onClick={navigate(Routes.SPEAKERS)}>Speakers</MenuItem> */}
              <MenuItem onClick={navigate(Routes.WORKSHOPS)}>
                Workshops
              </MenuItem>
              <MenuDivider />

              <MenuItem onClick={navigate(Routes.ABOUT_US)}>About Us</MenuItem>
              <MenuItem onClick={navigate(Routes.CONTACT_US)}>
                Contact Us
              </MenuItem>

              <MenuDivider />
              <MenuItem onClick={navigate(Routes.PARTNERS)}>Partners</MenuItem>
              <MenuDivider />
              <MenuItem onClick={navigate(Routes.FAQ)}>FAQ</MenuItem>
              <MenuDivider />
              <MobileHackathonButton onClick={hackathon}>
                Hackathon Signup
              </MobileHackathonButton>
            </MenuList>
          </Menu>
        </HStackContainer>
      </MobileCenterContainer>
    </MobileNavBarContainer>
  );
}
