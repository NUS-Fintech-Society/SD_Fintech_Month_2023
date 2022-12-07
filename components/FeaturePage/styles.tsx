import {
  Text,
  Box,
  chakra,
  Flex,
  Heading,
} from '@chakra-ui/react';

export const MorePageContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("/TimelineBackground.png")`,
    backgroundPosition: 'center',
    backgroundSize: '90%',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    marginBottom: '30px',
  },
});

export const FeatureContainer = chakra(Box, {
  baseStyle: {
    my: '30px',
    mt: '30px',
    mb: '100px',
  },
});

export const MorePageHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
  },
});

export const FeatureCard = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    w: '180px',
    h: '160px',
    p: '15px',
    bgColor: 'white',
    border: '1.5px solid rgba(0, 0, 0, 0.2)',
    borderStyle: 'solid',
    _hover: {
      bgColor: 'brand.tertiary',
      border: '0px',
      transform: 'scale(1.05)',
    },
    transition: '0.3s',
  },
});

export const FeatureHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: '3xl', md: '4xl' },
  },
});

export const PlusSymbol = chakra(Text, {
  baseStyle: {
    position: 'relative',
    top: '-3px',
    left: '2px',
  },
});

export const FeatureSubHeading = chakra(Text, {
  baseStyle: {
    fontSize: { base: 'xl', md: '2xl' },
    fontWeight: 'bold',
  },
});
