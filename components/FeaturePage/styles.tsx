import { Text, Box, chakra, Flex, Heading, Button } from '@chakra-ui/react';

// import BubbleBackground from '../../public/BubbleBackground.png';

export const MorePageContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '150vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#172554',
    // backgroundImage: `url(${BubbleBackground.src})`,
    // backgroundPosition: 'center',
    // backgroundSize: '90%',
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
    bgColor: 'rgba(84, 110, 243, 0.7)',
    borderRadius: 'xl',
    borderStyle: 'solid',
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
