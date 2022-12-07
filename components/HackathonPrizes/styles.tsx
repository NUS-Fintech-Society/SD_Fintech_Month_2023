import { Box, chakra, Flex, Heading, HStack, Image } from '@chakra-ui/react';

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    marginBottom: '30px',
  },
});

export const PrizesPage = chakra(Box, {
  baseStyle: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    pt: '140px',
    alignItems: 'center',
  },
});

export const MainPrizesHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'lg', md: '2xl' },
    color: 'brand.primary',
  },
});

export const OtherPrizesHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'md', md: 'xl' },
  },
});

export const MainPrizeWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bgColor: 'rgb(255, 255, 255)',
    w: '200px',
    h: '120px',
    m: '25px',
    p: '10px',
    borderRadius: '3xl',
  },
});

export const MainPrizeName = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '2xl' },
    my: '8px',
  },
});

export const MainPrizeAmount = chakra(Heading, {
  baseStyle: {
    fontSize: { base: '2xl', md: '3xl' },
  },
});

export const OtherPrizeWrapper = chakra(Box, {
  baseStyle: {
    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bgColor: 'rgb(255, 255, 255)',
    w: '170px',
    h: '100px',
    my: '20px',
    p: '10px',
    borderRadius: '3xl',
  },
});

export const OtherPrizeName = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'md', md: 'lg' },
    color: 'brand.primary',
    textAlign: 'center',
  },
});

export const OtherPrizeAmount = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '2xl' },
    color: 'brand.primary',
  },
});

export const RowContainer = chakra(HStack, {
  baseStyle: {
    justifyContent: 'center',
  },
});

export const MainPrizeSection = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: { base: 'column', md: 'row' },
    alignItems: 'center',
    mb: '60px',
  },
});

export const OtherPrizeSection = chakra(Box, {
  baseStyle: {
    alignItems: 'center',
    mb: '60px',
  },
});
