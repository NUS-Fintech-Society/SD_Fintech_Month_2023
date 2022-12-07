import { Box, chakra, Flex, Heading, Image } from '@chakra-ui/react';

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    marginBottom: '30px',
  },
});

export const TimelineSection = chakra(Box, {
  baseStyle: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    pt: '140px',
    alignItems: 'center',
  },
});

export const TimelineHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'lg', md: '2xl' },
    color: 'brand.primary',
  },
});

export const TimelineImage = chakra(Image, {
  baseStyle: {
    height: 'auto',
    width: 'auto',
    px: { base: '50px', md: '130px' },
  },
});
