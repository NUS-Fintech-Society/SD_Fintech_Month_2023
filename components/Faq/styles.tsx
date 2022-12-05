import { Box, chakra, Tab } from '@chakra-ui/react';

export const FaqWrapper = chakra(Box, {
  baseStyle: {
    width: '100vw',
    minHeight: { base: 'calc(100vh - 130px)', md: 'calc(100vh - 160px)' },
    justifyContent: 'center',
    bgImage: "url('/Background/sponsor-background.png')",
    bgSize: 'cover',
    bgPosition: 'center',
  },
});

export const Header = chakra(Box, {
  baseStyle: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '30px',
    justifyContent: 'center',
    paddingTop: { base: '0px', md: '50px' },
    paddingBottom: { base: '5px', md: '70px' },
  },
});

export const ContentWrapper = chakra(Box, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Content = chakra(Box, {
  baseStyle: {
    w: '1000px',
  },
});

export const StyledTab = chakra(Tab, {
  baseStyle: {
    fontSize: { base: '15px', md: '20px' },
    pr: { base: '20px', md: '50px' },
  },
});
