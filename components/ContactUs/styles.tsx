import { Text, Flex, Link, Box, chakra, Input, Button } from '@chakra-ui/react';
// import TimelineBackground from '../../public/TimelineBackground.png';

export const PageContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: 'calc(80vh - 100px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: '80%',
    position: 'relative',
    backgroundColor: '#20345B',
    paddingBottom: '80px',
  },
});

export const ContentContainer = chakra(Flex, {
  baseStyle: {
    width: { base: '80vw', lg: '70vw' }, //["80vw", "60vw", "60vw"]
    maxWidth: '830px',
    height: { base: '70vh', lg: '60vh' }, //["44", "50vh", "50vh"]
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    bg: 'white',
    borderRadius: '2xl',
    py: { base: '50', sm: '32', lg: '5' },
    pl: '8',
    pr: '8',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.3)',
  },
});

export const RowContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: { base: 'column', lg: 'row' },
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: { base: 'left', lg: 'center' },
    px: { base: '0px', md: '25px' },
  },
});

export const ContactUsText = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: { base: 'xl', sm: '2xl', lg: '3xl' }, //["lg", "lg", "5xl"] for responsive
    padding: '1',
    color: '#20345B',
  },
});

export const QueriesAndUpdatesText = chakra(Text, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: { base: 'sm', sm: 'lg' }, //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    // py: '10px',
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

export const EmailLink = chakra(Link, {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: { base: 'sm', sm: 'lg' }, //["2xs", "2xs", "lg"] for responsive
    // color: '#3F51B5',
    // textDecoration: 'underline',
    pl: '1',
    pt: '0',
    href: '#',
  },
});

export const InputAndButtonBox = chakra(Box, {
  baseStyle: {
    width: 'full', //["full", "auto", "auto"] for responsiveness
    textAlign: 'center',
  },
});

export const EmailInput = chakra(Input, {
  baseStyle: {
    size: 'md', //["sm", "md", "md"] for responsive
    bg: 'white',
    placeholder: 'email',
    borderRightRadius: '0px',
    // _placeholder: "email",
    // _placeholderShown: true;
  },
});

export const ConnectButton = chakra(Button, {
  baseStyle: {
    size: 'sm', //["sm", "md", "md"] for responsive
    bg: '#0C1747',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.3)',
    _hover: { bg: '#283593' },
    borderLeftRadius: '0px',
  },
});

export const ConnectButtonText = chakra(Text, {
  baseStyle: {
    fontWeight: 'light',
    fontSize: 's', //["xs", "xs", "lg"] for responsive
    color: 'white',
    padding: '2', //["0", "0", "2"] for responsive
  },
});
