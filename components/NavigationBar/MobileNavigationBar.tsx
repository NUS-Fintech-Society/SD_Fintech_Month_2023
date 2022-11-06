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
  MobileCenterContainer,
  MobileNavBarContainer,
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
              <MenuItem onClick={navigate(Routes.HOME)}>Week Overflow</MenuItem>
              <MenuItem onClick={navigate(Routes.HOME)}>Agenda</MenuItem>
              <MenuItem onClick={navigate(Routes.HOME)}>Speakers</MenuItem>
              <MenuItem onClick={navigate(Routes.HOME)}>Workshops</MenuItem>
              <MenuItem onClick={navigate(Routes.FAQ)}>FAQ</MenuItem>
              <MenuDivider />
              <MenuItem onClick={navigate(Routes.HOME)}>About Us</MenuItem>
              <MenuItem onClick={navigate(Routes.HOME)}>Contact Us</MenuItem>
              <MenuDivider />
              <MenuItem onClick={navigate(Routes.SPONSORS)}>Sponsors</MenuItem>
            </MenuList>
          </Menu>
        </HStackContainer>
      </MobileCenterContainer>
    </MobileNavBarContainer>
  );
}
