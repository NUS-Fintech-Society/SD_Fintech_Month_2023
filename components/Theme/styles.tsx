import { Flex, Box, Heading, Image, chakra } from '@chakra-ui/react';
import MosaicEffect from '../../public/MosaicEffect.png';

export const ThemePageContainer = chakra(Flex, {
  baseStyle: {
    position: 'relative',
    minH: 'calc(100vh - 100px)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    backgroundImage: `url(${MosaicEffect.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    position: 'absolute',
    top: '20px',
  },
});

export const ThemeHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
  },
});

export const TextBox = chakra(Box, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
    color: 'brand.primary',
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex-column',
    boxShadow: 'xl',
    borderRadius: '20',
    justifyContent: 'center',

    padding: { base: '40px 80px', md: '100px 170px' },
    bgColor: 'rgba(255, 255, 255, 0.95)',
  },
});

export const Centralised = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    align: 'center',
    width: '100%',
  },
});
