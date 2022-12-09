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
};

export default function MobileNavigationBar(props: Props) {
  const { navigate } = props;

  return (
    <MobileNavBarContainer>
      <MobileCenterContainer>
        <HStackContainer>
          <NextLink href={Routes.HOME} passHref>
            <Link>
              <Image
                src="/FintechSocietyLogo.png"
                w="90px"
                minWidth="90px"
                alt=""
              />
            </Link>
          </NextLink>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="black"
              rightIcon={<HamburgerIcon boxSize="1.3em" />}
              variant="link"
            />
            <MenuList>
              <MenuItem onClick={navigate(Routes.HOME)}>Home</MenuItem>
              <MenuDivider />
              <MenuItem onClick={navigate(Routes.WIP)}>Week Overview</MenuItem>
              <MenuItem onClick={navigate(Routes.MENTORS)}>Mentors</MenuItem>
              <MenuItem onClick={navigate(Routes.SPEAKERS)}>Speakers</MenuItem>
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
              <MenuItem onClick={navigate(Routes.WIP)}>Resources</MenuItem>
              <MenuDivider />
              <MobileHackathonButton
                onClick={navigate(Routes.FINTECH_HACKATHON)}
              >
                Fintech Hackathon
              </MobileHackathonButton>
            </MenuList>
          </Menu>
        </HStackContainer>
      </MobileCenterContainer>
    </MobileNavBarContainer>
  );
}
