import {
  Text,
  Flex,
  Link,
  Box,
  chakra,
  Input,
  Button,
  VStack,
  Textarea,
} from '@chakra-ui/react';

export const PageContainer = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: 'calc(100vh - 160px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("/Lines.png")`,
    backgroundPosition: 'center',
    backgroundSize: '80%',
  },
});

export const ContentContainer = chakra(Flex, {
  baseStyle: {
    width: { base: '85vw', sm: '70vw', lg: '70vw' }, //["90vw", "90vw", "70vw"]
    maxWidth: '830px',
    height: { base: '70vh', sm: '70vh', lg: '40vh' }, //["44", "50vh", "50vh"]
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    bg: 'brand.tertiary',
    borderRadius: '2xl',
    pl: { base: '20px', sm: '20px', lg: '30px' },
    pt: { base: '10px', sm: '10px', lg: '0' },
    boxShadow: 'md',
    bgColor: 'rgba(185, 195, 255, 0.5)',
    backdropFilter: 'blur(3px)',
  },
});

export const ContactUsText = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: { base: '2xl', sm: '2xl', lg: '4xl' }, //["lg", "lg", "5xl"] for responsive
    padding: '1',
    mt: { base: '0', sm: '10px', lg: '10px' },
  },
});

export const SuccessText = chakra(Text, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    py: '10px',
    color: 'green',
  },
});

export const FailedText = chakra(Text, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    py: '10px',
    color: 'red',
  },
});

export const InputAndButtonBox = chakra(Flex, {
  baseStyle: {
    width: 'full', //["full", "auto", "auto"] for responsiveness
    flexDir: { base: 'column', sm: 'column', lg: 'row' }, //["column", "row", 'row']
    mt: ['10px', '10px', '10px'],
  },
});

export const InputFlex = chakra(Flex, {
  baseStyle: {
    width: { base: '200px', sm: '200px', lg: '350px' },
    maxWidth: '830px',
    height: ['200px'], //["44", "50vh", "50vh"]
    flexDir: 'column',
    justifyContent: {
      base: 'flex-start',
      sm: 'space-between',
      lg: 'space-between',
    },
  },
});

export const TextAreaFlex = chakra(Flex, {
  baseStyle: {
    width: { base: '200px', sm: '400px', lg: '350px' }, //["80vw", "60vw", "60vw"]
    maxWidth: '830px',
    height: 'auto', //["44", "50vh", "50vh"]
    flexDir: { base: 'column', sm: 'column', lg: 'column' },
    alignItems: { base: 'flex-start', sm: 'flex-start', lg: 'center' },
    ml: { sm: '0', lg: '70px' },
    mr: { sm: '0', lg: '70px' },
    mt: { sm: '20px', lg: '0px' },
  },
});

export const InquiryTextArea = chakra(Textarea, {
  baseStyle: {
    fontSize: ['sm', 'sm', 'md'],
    width: { base: '60vw', sm: '60vw', lg: '350px' },
    height: ['100px', '150px', '150px'],
    bg: 'white',
    boxShadow: 'md',
    alignSelf: { sm: 'flex-start', lg: 'center' },
  },
});

export const TextInput = chakra(Input, {
  baseStyle: {
    width: { base: '60vw', sm: '60vw', lg: '350px' },
    bg: 'white',
    placeholder: 'email',
    boxShadow: 'md',
    mt: { base: '5', sm: '5', lg: '0' },
  },
});

export const ConnectButton = chakra(Button, {
  baseStyle: {
    mt: '10px',
    size: 'sm', //["sm", "md", "md"] for responsive
    bg: '#1A237E',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.3)',
    _hover: { bg: '#283593' },
  },
});

export const ConnectButtonText = chakra(Text, {
  baseStyle: {
    fontWeight: 'light',
    fontSize: 's', //["xs", "xs", "lg"] for responsive
    color: 'white',
    padding: '3', //["0", "0", "2"] for responsive
  },
});
