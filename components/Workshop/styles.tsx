import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  chakra,
} from '@chakra-ui/react';

export const WorkshopContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '100%',
    minH: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    // justify : '',
    py: { base: '15%', md: '5%' },
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '15%',
    align: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
});

export const WorkshopHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: 'xl', md: '4xl' },
  },
});

export const EventContainer = chakra(Flex, {
  baseStyle: {
    h: '100%',
    w: { base: '100%', md: '70%' },
    flexDirection: 'column',
    alignItems: 'center',
    jusitfy: 'center',
    paddingBottom: '2%',
    padding: { base: '5%', md: 0 },
  },
});

export const Event = chakra(Flex, {
  baseStyle: {
    w: { base: '90%', md: '100%' },
    h: '100%',
    flexDirection: 'column',
    my: { base: '3%', md: '0' },
    marginBottom: { base: '3%', md: '2%' },
    padding: { base: '3%', md: '1%' },
    py: { base: '5%', md: '3%' },
    borderRadius: '20',
    boxShadow:
      '5px 5px 4px rgba(149, 157, 165, 0.2), -5px 5px 4px rgba(149, 157, 165, 0.2), 5px -2px 4px rgba(149, 157, 165, 0.2)',
  },
});

export const DateLabel = chakra(Flex, {
  baseStyle: {
    w: { base: '80%', md: '100%' },
    h: '5%',
    fontSize: { base: 'md', md: 'lg' },
    alignItems: 'center',
    textAlign: 'center',
    color: '#001158',
    py: { md: '1%' },
    fontWeight: 'bold',
  },
});

export const Row = chakra(Flex, {
  baseStyle: {
    h: { base: '40%', md: '25%' },
    w: '100%',
    alignItems: 'center',
    justify: 'apart',
    py: { base: '3%', md: '0' },
  },
});

export const MobileTop = chakra(Flex, {
  baseStyle: {
    h: '60%',
    w: '100%',
    px: '5%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const MobileBottom = chakra(Flex, {
  baseStyle: {
    h: '60%',
    w: '100%',
    px: '10%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

//Left of Row
export const WorkshopSpeaker = chakra(Flex, {
  baseStyle: {
    h: '40%',
    w: { base: '60%', md: '20%' },
    px: '3%',
    flexDirection: 'column',
    alignItems: 'center',
    justify: { base: 'space-evenly', md: 'none' },
  },
});

export const SpeakerImage = chakra(Image, {
  baseStyle: {
    borderRadius: 'full',
    w: { base: '50%', md: '70%' },
    py: { base: '2%' },
  },
});

export const SpeakerLabel = chakra(Text, {
  baseStyle: {
    fontSize: 'sm',
    color: '#001158',
    textAlign: 'center',
    py: { base: '1%', md: '0%' },
  },
});

//Center of Row
export const CenterContent = chakra(Flex, {
  baseStyle: {
    w: '60%',
    h: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    px: { base: 0, md: '2%' },
  },
});

export const WorkshopTitle = chakra(Flex, {
  baseStyle: {
    w: { base: '80%', md: '100%' },
    fontSize: { base: 'md', md: 'lg' },
    color: '#001158',
    paddingBottom: '2%',
    fontWeight: { base: 'bold', md: 'normal' },
    alignSelf: { base: 'center', md: 'start' },
    justifyContent: { base: 'center', md: 'start' },
    textAlign: { base: 'center', md: 'start' },
  },
});

export const WorkshopDescription = chakra(Text, {
  baseStyle: {
    h: '90%',
    fontSize: 'sm',
    py: { base: '8%', md: '0' },
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
});

//Right of Row
export const RightContent = chakra(Flex, {
  baseStyle: {
    w: '20%',
    flexDirection: 'column',
    alignItems: 'start',
    h: '100%',
    px: '2%',
    // paddingLeft : '1%',
  },
});

export const WorkshopDetails = chakra(Flex, {
  baseStyle: {
    w: { base: '90%', md: '100%' },
    flexDirection: { base: 'row', md: 'column' },
    justifyContent: { base: 'space-between', md: 'none' },
    color: '#001158',
    fontSize: 'sm',
    h: '60%',
    paddingBottom: { base: '0', md: '10%' },
    paddingRight: '4%',
    // justifyContent : 'start',
    // paddingLeft : '1%',
  },
});

export const DetailContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    justify: 'start',
  },
});

export const DetailLabel = chakra(Flex, {
  baseStyle: {
    fontWeight: 'bold',
    // h : '100%',
    // justifyContent : 'start',
    // paddingLeft : '1%',
  },
});

export const RegisterButton = chakra(Button, {
  baseStyle: {
    width: '75%',
    height: '3rem',
    borderRadius: '10',
    color: 'white',
    backgroundColor: '#001158',
    fontWeight: 'normal',
    my: { base: '3%', md: '0' },
  },
});
