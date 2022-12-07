import { HeaderContent, Header, LeaderBoardModal, ModalButton,ModalLogo, Row, MemberDetail, BodyContent, MedalImage, HeaderImage, Unavailable} from './styles';
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
    Text
  } from '@chakra-ui/react'
import {LeaderBoardData} from '../../data/LeaderBoard';
import {LeaderBoardMember} from '../../types/LeaderboardMember';

function getSingleMember(member: LeaderBoardMember){
    return member.rank == 1 
    ? (<Row color = "#CFB53B" fontWeight = {"bold"}>
            <MemberDetail width = {'12%'} justifyContent={'flex-end'}><MedalImage src = "/gold-medal.png"/></MemberDetail><MemberDetail width = {'13%'} justifyContent={'flex-start'}>{member.rank}</MemberDetail><MemberDetail>{member.username}</MemberDetail><MemberDetail>{member.accuracy}</MemberDetail><MemberDetail>{member.time.toFixed(2)}</MemberDetail>
    </Row>)
    : member.rank == 2
    ? (<Row color = "grey" fontWeight = {"bold"}>
            <MemberDetail width = {'12%'} justifyContent={'flex-end'}><MedalImage marginRight = {"2.5%"} src = "/silver-medal.png"/></MemberDetail><MemberDetail width = {'13%'} justifyContent={'flex-start'}>{member.rank}</MemberDetail><MemberDetail>{member.username}</MemberDetail><MemberDetail>{member.accuracy}</MemberDetail><MemberDetail>{member.time.toFixed(2)}</MemberDetail>
    </Row>)
    : member.rank == 3
    ? (<Row color = "#CD7F32" fontWeight = {"bold"}>
            <MemberDetail width = {'12%'} justifyContent={'flex-end'}><MedalImage src = "/bronze-medal.png"/></MemberDetail><MemberDetail width = {'13%'} justifyContent={'flex-start'}>{member.rank}</MemberDetail><MemberDetail>{member.username}</MemberDetail><MemberDetail>{member.accuracy}</MemberDetail><MemberDetail>{member.time.toFixed(2)}</MemberDetail>
    </Row>)
    : (<Row>
    <MemberDetail>{member.rank}</MemberDetail><MemberDetail>{member.username}</MemberDetail><MemberDetail>{member.accuracy}</MemberDetail><MemberDetail>{member.time.toFixed(2)}</MemberDetail>
    </Row>)
}

export default function LeaderBoard() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const ready = false;
    return(
        <Box>
            <ModalButton onClick = {onOpen} ><ModalLogo src = "/award.png"></ModalLogo></ModalButton>
            <Modal size = {'4xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                <ModalHeader>
                <HeaderContent><HeaderImage src = "/award.png"/>Leaderboard</HeaderContent>
                <ModalCloseButton />
                </ModalHeader>
                <Divider/>
                <BodyContent>
                    <LeaderBoardModal>
                        <Header><MemberDetail>Rank</MemberDetail><MemberDetail>Username</MemberDetail><MemberDetail>Accuracy</MemberDetail><MemberDetail>Time</MemberDetail></Header>
                        {ready ? LeaderBoardData.map(member => getSingleMember(member)) : <Unavailable>Check Back For More Updates</Unavailable>}
                    </LeaderBoardModal>
                </BodyContent>
                <Divider/>
                <ModalFooter>
                    <Button colorScheme={"brand"}>Claim Prize</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}