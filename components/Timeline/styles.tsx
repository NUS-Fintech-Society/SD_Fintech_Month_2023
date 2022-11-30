import { chakra, Flex, Heading, Image } from '@chakra-ui/react';

export const TimelinePageContainer = chakra(Flex, {
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

export const TimelineHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
  },
});

export const TimelineImage = chakra(Image, {
  baseStyle: {
    height: 'auto',
    width: 'auto',
    padding: { base: '50px', md: '130px' },
  },
});
