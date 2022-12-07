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
    width: ['320px', '320px', '320px'],
    height: ['400px', '400px', '400px'],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5',
    align: 'center',
    transition: '0.3s',
    _hover: {
      bg: '#F5F5F5',
      cursor: 'pointer',
    },
    backdropFilter: 'blur(3px)',
  },
});

export const MentorName = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: ['2xl', '2xl', '2xl'], //["lg", "lg", "5xl"] for responsive
    color: 'brand.primary',
    padding: '1',
  },
});

export const MentorImage = chakra(Image, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    w: '200px',
    minWidth: '200px',
    h: '200px',
    minHeight: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
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
    // padding: '2',
  },
});

export const DetailsText = chakra(Text, {
  baseStyle: {
    textAlign: 'center',
    fontWeight: 'light',
    fontSize: ['sm', 'sm', 'sm'],
    color: 'brand.primary',
    // padding: ['0', '0', '0'],
  },
});

export const DetailsBox = chakra(Box, {
  baseStyle: {
    pl: '5',
    pr: '5',
    pt: '2',
    pb: '2',
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
    fontSize: 'sm',
    mb: '1',
  },
});

export const OrgText = chakra(Text, {
  baseStyle: {
    color: 'brand.primary',
    align: 'center',
    fontSize: 'md',
    fontWeight: 'bold',
    mb: '5',
  },
});
