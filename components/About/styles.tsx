import { Flex, Box, Heading, Image, chakra } from '@chakra-ui/react';
import BubbleEffect2 from '../../public/BubbleEffect2.png';

export const AboutContainer = chakra(Flex, {
  baseStyle: {
    minH: 'calc(100vh - 100px)',
    width: '100',
    flexDirection: 'column',
    align: 'center',
    justifyContent: 'center',
    paddingTop: { base: '20%', md: '50px' },
    backgroundImage: `url(${BubbleEffect2.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '15%',
    align: 'center',
    justifyContent: 'center',
    padding: '5%',
    paddingBottom: '4%',
  },
});

export const AboutHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
  },
});

export const ContentContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '85%',
    flexDirection: { base: 'column-reverse', md: 'row' },
    align: 'center',
    paddingTop: { base: '0', md: '7%', xl: '20px' },
    paddingLeft: { base: '0', md: '8%' },
  },
});

export const LeftContentContainer = chakra(Flex, {
  baseStyle: {
    w: { base: '100%', md: '65%' },
    h: '100%',
    justifyContent: 'center',
    direction: 'column',
    align: 'center',
    paddingBottom: { base: '10%', md: '0' },
  },
});

export const FlushTopLeft = chakra(Flex, {
  baseStyle: {
    w: { base: '80%', md: '100%' },
    height: '50%',
    align: 'center',
    justifyContent: 'center',
  },
});

export const FlushTopRight = chakra(Flex, {
  baseStyle: {
    height: '50%',
    align: 'center',
    justifyContent: 'center',
    paddingLeft: { base: '0', md: '50%', lg: '30%', xl: '5%' },
    paddingBottom: { base: '20%', xl: '10%' },
    paddingTop: { base: '20%', md: '0' },
  },
});

export const Centralised = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    align: 'center',
    width: '100%',
  },
});

export const DescriptionBox = chakra(Box, {
  baseStyle: {
    w: '90%',
    display: 'flex-column',
    boxShadow: 'xl',
    borderRadius: '20',
    justifyContent: 'center',
    padding: { base: '15px', md: '20px 15px' },
    bgColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(3px)',
    color: '#001158',
    textAlign:'center'
  },
});

export const RightContentContainer = chakra(Flex, {
  baseStyles: {
    direction: 'column',
    align: 'center',
    justify: { base: 'center', md: 'start' },
    w: { base: '80%', md: '30%' },
    h: { base: '50%', md: '100%' },
    paddingLeft: { base: '0', md: '15%' },
  },
});

export const TopImage = chakra(Image, {
  baseStyle: {
    position: 'relative',
    zIndex: '2',
    right: { base: '-6rem', md: '1rem' },
    bottom: { base: '4rem', md: '2rem' },
    borderRadius: '5px',
    height: { base: '6rem', sm: '8rem' },
    width: '10rem',
  },
});

export const MiddleImage = chakra(Image, {
  baseStyle: {
    position: 'relative',
    zIndex: '1',
    left: { base: '2rem', md: '-6rem' },
    bottom: { base: '1rem', md: '-1rem' },
    borderRadius: '5px',
    height: { base: '10rem', sm: '12rem' },
    width: { base: '13rem', sm: '15rem' },
  },
});

export const BottomImage = chakra(Image, {
  baseStyle: {
    position: 'relative',
    zIndex: '2',
    left: { base: '-11srem', sm: '-15.5rem', md: '-22rem' },
    top: { base: '4rem', sm: '6rem', md: '8rem' },
    borderRadius: '5px',
    height: { base: '7rem', sm: '9rem' },
    width: { base: '9rem', sm: '11rem' },
  },
});
