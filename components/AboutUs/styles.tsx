import { Box, chakra, Center } from '@chakra-ui/react';

export const AboutUsContainer = chakra(Center, {
  baseStyle: {
    width: '100%',
    justifyContent: 'center',
    py: '50px',
  },
});

export const Wrapper = chakra(Box, {
  baseStyle: {
    bg: 'None',
    w: '80%',
    py: '30px',
    px: '80px',
    borderRadius: '3xl',
    boxShadow: '2xl',
    borderColor: 'white',
    borderWidth: '1px',
  },
});

export const Title = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: '4xl',
    color: 'white',
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
    color: 'white',
  },
});

export const Description = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '0px',
    paddingBottom: '15px',
    fontSize: '18px',
    color: 'white',
    textAlign: 'center',
  },
});
