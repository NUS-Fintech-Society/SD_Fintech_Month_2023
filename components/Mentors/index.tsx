import React from 'react';
import { MentorsFlex, Container, Title } from './styles';
import MentorsContainer from './MentorsContainer';
import { MentorsInfoArray } from '../../data/Mentors';

export default function MentorsContent() {
  const dataArray = MentorsInfoArray.map((mentor, index) => {
    return <MentorsContainer key={index} mentor={mentor} />;
  });

  return (
    <Container>
      <Title>MENTORS</Title>
      <MentorsFlex>{dataArray}</MentorsFlex>
    </Container>
  );
}
