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

export const SpeakerModal = chakra(Modal, {
  baseStyle: {
    borderRadius: '50px',
    color: 'brand.primary',
  },
});

export const SpeakerModalContent = chakra(ModalContent, {
  baseStyle: {
    borderRadius: '20px',
    color: 'brand.primary',
    padding: '20px 20px 80px 20px',
    margin: '20px',
    textAlign: 'center',
  },
});
