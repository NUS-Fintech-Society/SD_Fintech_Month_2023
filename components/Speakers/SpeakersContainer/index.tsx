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
import { isEmptyString } from '../../../utils/CommonUtil';
import SpeakerBox from '../SpeakersBox';
import { SpeakerModal, SpeakerModalContent } from './styles';

type Props = {
  speaker: Speaker;
};

export default function SpeakerContainer(props: Props) {
  const { speaker } = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isModalOpen = isOpen && !isEmptyString(speaker.description)

  return (
    <>
    {speaker.description 
      ? <Box onClick={onOpen}>
        <SpeakerBox speakerInfo={speaker}></SpeakerBox>
        <SpeakerModal isOpen={isModalOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <SpeakerModalContent>
            <ModalHeader textAlign="center">{speaker.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{speaker.description}</ModalBody>
          </SpeakerModalContent>
        </SpeakerModal>
      </Box> 
      : <Box>
        <SpeakerBox speakerInfo={speaker}></SpeakerBox>
        <SpeakerModal isOpen={isModalOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <SpeakerModalContent>
            <ModalHeader textAlign="center">{speaker.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{speaker.description}</ModalBody>
          </SpeakerModalContent>
        </SpeakerModal>
      </Box>}
      
    </>
  );
}
