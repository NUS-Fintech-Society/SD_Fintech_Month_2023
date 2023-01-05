import {
  HeaderContent,
  Header,
  LeaderBoardModal,
  ModalButton,
  QuizButton,
  Row,
  MemberDetail,
  BodyContent,
  HeaderImage,
  QuizStatus,
  ModalDetailLabel,
  CustomModalFooter,
} from './styles';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';
import { QuizWinners, LuckyDrawWinners } from '../../data/LeaderBoard';
import { LeaderBoardMember } from '../../types/LeaderboardMember';

function getLeaderBoard() {
  return (
    <>
      <LeaderBoardModal>
        <ModalDetailLabel>Quiz Winners</ModalDetailLabel>
        <Divider borderTop={'1px solid grey'} />
        {QuizWinners.map((member) => getSingleMember(member))}
        <ModalDetailLabel>Lucky Draw Winners</ModalDetailLabel>
        <Divider borderTop={'1px solid grey'} />
        {LuckyDrawWinners.map((member) => getSingleMember(member))}
      </LeaderBoardModal>
    </>
  );
}

function getClosedState() {
  return (
    <>
      <QuizStatus>
        Quiz is closed. <br /> The next quiz will be released on 11 Jan 2023, 12
        noon.
      </QuizStatus>
    </>
  );
}

function getOpenedState() {
  return (
    <>
      <QuizStatus>
        <>Quiz open till 14 Jan 2023, 23:59</>
        <QuizButton>Go to Quiz</QuizButton>
      </QuizStatus>
    </>
  );
}

function getSingleMember(member: LeaderBoardMember) {
  return member.rank == 1 ? (
    <Row color="#CFB53B" fontWeight={'bold'}>
      <MemberDetail>{member.email}</MemberDetail>
    </Row>
  ) : member.rank == 2 ? (
    <Row color="grey" fontWeight={'bold'}>
      <MemberDetail>{member.email}</MemberDetail>
    </Row>
  ) : member.rank == 3 ? (
    <Row color="#CD7F32" fontWeight={'bold'}>
      <MemberDetail>{member.email}</MemberDetail>
    </Row>
  ) : (
    <Row>
      <MemberDetail>{member.email}</MemberDetail>
    </Row>
  );
}

function getModalFooter() {
  return (
    <>
      <Divider borderTop={'1px solid grey'} />
      <CustomModalFooter>
        Please wait for 1-2 days for us to get in touch if you are a winner
      </CustomModalFooter>
    </>
  );
}

export default function LeaderBoard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let results = false;
  let quizOpen = false;
  let quizClosed = true;

  return (
    <Box>
      <ModalButton onClick={onOpen}>Weekly Quizzes</ModalButton>
      <Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HeaderContent>
              <HeaderImage src="/award.png" />
              Weekly Quiz
            </HeaderContent>
            <ModalCloseButton />
          </ModalHeader>
          <Divider borderTop={'1px solid grey'} />
          <BodyContent>
            {results ? (
              getLeaderBoard()
            ) : quizClosed ? (
              getClosedState()
            ) : quizOpen ? (
              getOpenedState()
            ) : (
              <></>
            )}
          </BodyContent>
          {results ? getModalFooter() : <></>}
        </ModalContent>
      </Modal>
    </Box>
  );
}
