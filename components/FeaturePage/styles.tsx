import { Text, Box, chakra, Flex, Heading, Button } from '@chakra-ui/react';

// import BubbleBackground from '../../public/BubbleBackground.png';

export const MorePageContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20345B',
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
    px: '20px',
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
    w: { base: '130px', sm: '180px' },
    h: { base: '120px', sm: '160px' },
    p: '15px',
    color: 'white',
    bgColor: 'white',
    borderColor: '#67C3C6',
    borderRadius: 'xl',
    borderStyle: 'solid',
    borderWidth: '2px',
    _hover: {
      bgColor: 'white',
      border: '1.5px solid rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
      color: 'black',
    },
    transition: '0.3s',
    shadow: 'dark-lg',
  },
});

export const FeatureHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: '3xl', md: '4xl' },
    color: '#67C3C6',
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
    color: 'black',
  },
});

export const FAQButton = chakra(Button, {
  baseStyle: {
    height: '55px',
    borderRadius: '10px',
    fontSize: 'sm',
  },
});

export const FAQSection = chakra(Box, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  },
});
