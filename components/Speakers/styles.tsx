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
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: '100%',
    pt: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundImage: `url("/Background/workshop-background.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

export const SpeakersFlex = chakra(Flex, {
  baseStyle: {
    width: '70vw',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // alignItems: "center",
  },
});

export const Title = chakra(Flex, {
  baseStyle: {
    mt: ['60px', '60px', '0'],
    mb: '20px',
    fontWeight: 'bold',
    fontSize: ['3xl', '3xl', '5xl'],
    color: '#001158',
    textAlign: 'center',
  },
});
