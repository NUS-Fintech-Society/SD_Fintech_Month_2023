import {
  Box,
  Button,
  Center,
  chakra,
  HStack,
  MenuItem,
} from '@chakra-ui/react';

export const NavBarContainer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    width: '100%',
    height: '100px',
    background: '#0c1747',
    color: 'white',
    zIndex: 50,
    top: 0,
  },
});

export const CenterContainer = chakra(Center, {
  baseStyle: {
    h: '100%',
    pl: '50',
    pr: '50',
  },
});

export const MobileNavBarContainer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    width: '100%',
    height: '70px',
    // background: 'white',
    background: '#0c1747',
    zIndex: 10,
    top: 0,
  },
});

export const MobileCenterContainer = chakra(Center, {
  baseStyle: {
    h: '100%',
    pl: '20px',
    pr: '20px',
  },
});

export const HStackContainer = chakra(HStack, {
  baseStyle: {
    justifyContent: 'space-between',
    w: '100%',
    h: '100%',
  },
});

export const HackathonButton = chakra(Button, {
  baseStyle: {
    width: '200px',
    height: '40px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '10px',
    borderColor: '#67C3C6',
  },
});

export const MobileHackathonButton = chakra(MenuItem, {
  baseStyle: {
    bg: 'brand.primary',
    textColor: 'white',
    _hover: { bg: 'brand.secondary' },
  },
});
