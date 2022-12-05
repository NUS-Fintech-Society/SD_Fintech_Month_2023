import {
  Text,
  Flex,
  Link,
  Box,
  chakra,
  Input,
  Button,
  HStack,
  Image,
} from '@chakra-ui/react';

export const MainBox = chakra(Flex, {
  baseStyle: {
    width: ['320px', '380px', '380px'],
    height: ['470px', '550px', '550px'],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5',
    // mb: ['8', '8', '8'],
    // ml: ['0', '0', '0'],
    // mr: ['0', '0', '0'],
    align: 'center',
    transition: '0.3s',
    _hover: { bg: '#F5F5F5' },
  },
});

export const SpeakerName = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: ['2xl', '2xl', '3xl'], //["lg", "lg", "5xl"] for responsive
    color: 'brand.primary',
    padding: '1',
  },
});

export const SpeakerImage = chakra(Image, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    // boxSize: "250",
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '400px',
    mb: '5',
  },
});

export const EmailLink = chakra(Link, {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    color: '#3F51B5',
    textDecoration: 'underline',
    pl: '1',
    pt: '0',
    href: '#',
  },
});

export const InputAndButtonBox = chakra(Box, {
  baseStyle: {
    width: 'auto', //["full", "auto", "auto"] for responsiveness
  },
});

export const DetailsFlex = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    mb: '0', //["2", "8"] for responsiveness
  },
});

export const DetailsText = chakra(Text, {
  baseStyle: {
    fontWeight: 'light',
    fontSize: ['md', 'md', 'lg'],
    color: 'brand.primary',
    padding: ['1', '2', '2'],
  },
});

export const DetailsBox = chakra(Box, {
  baseStyle: {
    pl: '5',
    pr: '5',
    background: '#DFE1F9',
    border: '1px solid #B9C3FF',
    borderRadius: '10px',
  },
});

export const TitleText = chakra(Text, {
  baseStyle: {
    color: 'brand.primary',
    textAlign: 'center',
    align: 'center',
    fontSize: 'lg',
    mb: '2',
  },
});

export const OrgText = chakra(Text, {
  baseStyle: {
    color: 'brand.primary',
    align: 'center',
    fontSize: 'lg',
    fontWeight: 'bold',
    mb: '5',
  },
});
