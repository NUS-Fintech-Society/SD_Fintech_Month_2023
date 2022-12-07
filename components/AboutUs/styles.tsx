import {
  Box,
  chakra,
  HStack,
  UnorderedList,
  Text,
  Center,
} from '@chakra-ui/react';

export const AboutUsContainer = chakra(Center, {
  baseStyle: {
    width: '100%',
    // Make this responsive to mobile design
    minHeight: 'calc(100vh - 160px)',
    justifyContent: 'center',
    bgImage: "url('/Background/sponsor-background.png')",
    bgSize: 'cover',
    bgPosition: 'center',
    pb: '50px',
    pt: '50px',
  },
});

export const Wrapper = chakra(Box, {
  baseStyle: {
    bg: 'None',
    w: '80%',
    p: '30px',
    borderRadius: '3xl',
    boxShadow: '2xl',
    bgColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export const Title = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: '4xl',
    color: 'black',
  },
});

export const Title2 = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '0px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    fontSize: '22px',
    color: 'brand.primary',
  },
});

export const Description = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '0px',
    paddingBottom: '15px',
    fontSize: '18px',
    color: 'black',
  },
});
