import { Box, Button, Center, chakra, HStack } from '@chakra-ui/react';

export const NavBarContainer = chakra(Box, {
  baseStyle: {
<<<<<<< HEAD
    position: "fixed",
    width: "100%",
    height: "100px",
    background: "white",
    zIndex: "2",
=======
    position: 'fixed',
    width: '100%',
    height: '100px',
    background: 'white',
>>>>>>> origin
  },
});

export const CenterContainer = chakra(Center, {
  baseStyle: {
<<<<<<< HEAD
    h: "100%",
    pl: "50",
    pr: "50",
=======
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
    background: 'white',
  },
});

export const MobileCenterContainer = chakra(Center, {
  baseStyle: {
    h: '100%',
    pl: '20px',
    pr: '20px',
>>>>>>> origin
  },
});

export const HStackContainer = chakra(HStack, {
  baseStyle: {
<<<<<<< HEAD
    justifyContent: "space-between",
    w: "100%",
    h: "100%",
=======
    justifyContent: 'space-between',
    w: '100%',
    h: '100%',
>>>>>>> origin
  },
});

export const HackathonButton = chakra(Button, {
  baseStyle: {
<<<<<<< HEAD
    width: "200px",
    height: "40px",
    borderRadius: "20px",
=======
    width: '200px',
    height: '40px',
    borderRadius: '20px',
>>>>>>> origin
  },
});
