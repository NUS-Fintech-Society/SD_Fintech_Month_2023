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
import { Mentor } from '../../../types/Mentor';
import MentorBox from '../MentorsBox';
import { MentorModal, MentorModalContent } from './styles';

type Props = {
  mentor: Mentor;
};

export default function MentorContainer(props: Props) {
  const { mentor } = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <MentorBox mentorInfo={mentor}></MentorBox>
        <MentorModal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <MentorModalContent>
            <ModalHeader textAlign="center">{mentor.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mentor.description}</ModalBody>
          </MentorModalContent>
        </MentorModal>
      </Box>
    </>
  );
}
