import React from 'react';
import { MentorsFlex, Container, Title } from './styles';
import MentorsContainer from './MentorsContainer';
import { MentorsInfoArray } from '../../data/Mentors';

export default function MentorsContent() {
  const dataArray = MentorsInfoArray.sort((mentor1, mentor2) =>
    mentor1.name.localeCompare(mentor2.name),
  ).map((mentor, index) => {
    return <MentorsContainer key={index} mentor={mentor} />;
  });

  return (
    <Container>
      <Title>MENTORS</Title>
      <MentorsFlex>{dataArray}</MentorsFlex>
    </Container>
  );
}
