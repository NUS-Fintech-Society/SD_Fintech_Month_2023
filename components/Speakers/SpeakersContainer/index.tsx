import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Speaker } from '../../../types/Speaker';
import SpeakerBox from '../SpeakersBox';
import { SpeakerModal, SpeakerModalContent } from './styles';

type Props = {
  speaker: Speaker;
};

export default function SpeakerContainer(props: Props) {
  const { speaker } = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <SpeakerBox speakerInfo={speaker}></SpeakerBox>
        <SpeakerModal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <SpeakerModalContent>
            <ModalHeader textAlign="center">{speaker.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{speaker.description}</ModalBody>
          </SpeakerModalContent>
        </SpeakerModal>
      </Box>
    </>
  );
}
