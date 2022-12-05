import React from 'react';
import { ListItem, VStack } from '@chakra-ui/react';
import {
  AnnoucementSection,
  AnnouncementList,
  HackathonHeading,
  HeadingContainer,
  RegisterButton,
  Title,
  Wrapper,
} from './styles';
import { annoucements } from '../../data/Announcements';

export default function HackathonAnnouncement() {
  function annoucementItem(annoucements: string[]) {
    return annoucements.map((annoucement, index) => (
      <ListItem my="20px" key={index}>
        {annoucement}
      </ListItem>
    ));
  }

  return (
    <AnnoucementSection>
      <HeadingContainer>
        <HackathonHeading>FINTECH MONTH HACKATHON</HackathonHeading>
      </HeadingContainer>
      <Wrapper>
        <Title>Announcements</Title>
        <AnnouncementList>{annoucementItem(annoucements)}</AnnouncementList>
      </Wrapper>
      <RegisterButton colorScheme="brand">Register Now</RegisterButton>
    </AnnoucementSection>
  );
}
