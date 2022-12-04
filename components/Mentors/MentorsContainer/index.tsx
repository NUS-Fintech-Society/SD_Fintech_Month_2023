import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import MentorBox from '../MentorsBox';
import {
  MentorsFlex,
  Container,
  Title,
  MentorModal,
  MentorModalContent,
} from './styles';
import { MentorInfoArray } from '../../../data/Mentors';
import { Mentor } from '../../../types/Mentor';

//Hardcoded values for the time being

export default function MentorsContainer() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container>
        <Title>MENTORS</Title>
        <MentorsFlex>
          <MentorBox MentorInfo={MentorInfoArray[0]}></MentorBox>

          <Box onClick={onOpen}>
            <MentorBox MentorInfo={MentorInfoArray[1]} />

            <MentorModal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <MentorModalContent>
                <ModalHeader textAlign="center">Nischint Sanghavi</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Nischint is the Regional Lead for Crypto in Asia Pacific,
                  responsible for overseeing Visa’s crypto business in AP
                  including creating and growing new revenue streams through
                  emerging crypto products and GTM efforts. Nischint and his
                  team serve as the subject matter experts supporting client
                  facing teams on digital currency/web 3.0 engagements with key
                  stakeholders. Nischint brings over 19 years of experience in
                  financial services. Nischint holds an MBA from Boston
                  University School of Management and is also a Chartered
                  Accountant.
                </ModalBody>
              </MentorModalContent>
            </MentorModal>
          </Box>

          <MentorBox MentorInfo={MentorInfoArray[2]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[3]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[4]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[5]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[6]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[7]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[8]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[9]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[10]}></MentorBox>
          <MentorBox MentorInfo={MentorInfoArray[11]}></MentorBox>
        </MentorsFlex>
      </Container>
    </>
  );
}
