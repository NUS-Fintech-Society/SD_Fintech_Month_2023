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
  ModalBody,
  ModalContent,
  Modal,
} from '@chakra-ui/react';

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: '100%',
    pt: '10%',

    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export const MentorsFlex = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export const Title = chakra(Flex, {
  baseStyle: {
    mt: ['60px', '60px', '20px'],
    mb: '20px',
    fontWeight: 'bold',
    fontSize: ['3xl', '3xl', '5xl'],
    color: 'brand.primary',
    textAlign: 'center',
  },
});

export const MentorModal = chakra(Modal, {
  baseStyle: {
    borderRadius: '50px',
    color: 'brand.primary',
  },
});

export const MentorModalContent = chakra(ModalContent, {
  baseStyle: {
    borderRadius: '20px',
    color: 'brand.primary',
    padding: '20px 20px 80px 20px',
    margin: '20px',
  },
});
