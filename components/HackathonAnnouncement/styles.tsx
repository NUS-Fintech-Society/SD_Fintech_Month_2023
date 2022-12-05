import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Heading,
  UnorderedList,
} from '@chakra-ui/react';

export const AnnoucementSection = chakra(Box, {
  baseStyle: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    pt: '100px',
    alignItems: 'center',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '15%',
    align: 'center',
    justifyContent: 'center',
  },
});

export const HackathonHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '3xl' },
    mb: '70px',
    mt: '20px',
  },
});

export const Title = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15px',
    paddingBottom: '5px',
    fontWeight: 'bold',
    fontSize: { base: 'xl', md: '2xl' },
    color: 'brand.primary',
  },
});

export const Wrapper = chakra(Box, {
  baseStyle: {
    bgColor: 'rgba(255, 255, 255)',
    w: '55%',
    px: '20px',
    py: '5px',
    borderRadius: '2xl',
    borderTopRadius: '0',
    boxShadow: 'xl',
  },
});

export const AnnouncementList = chakra(UnorderedList, {
  baseStyle: {
    fontSize: { base: 'sm', md: 'md' },
    fontWeight: 'bold',
  },
});

export const RegisterButton = chakra(Button, {
  baseStyle: {
    mt: '50px',
    width: '36%',
    height: '55px',
    borderRadius: '10px',
    fontSize: 'sm',
  },
});
