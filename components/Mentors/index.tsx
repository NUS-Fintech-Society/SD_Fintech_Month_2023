import React from 'react';
import { MentorsFlex, Container, Title } from './styles';
import MentorsContainer from './MentorsContainer';
import { MentorsInfoArray } from '../../data/Mentors';
import Image from 'next/image';
import Background from '../../public/Background/workshop-background.png';

export default function MentorsContent() {
  const dataArray = MentorsInfoArray.sort((mentor1, mentor2) =>
    mentor1.name.localeCompare(mentor2.name),
  ).map((mentor, index) => {
    return <MentorsContainer key={index} mentor={mentor} />;
  });

  return (
    <Container>
      <Image
        src={Background}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <Title>MENTORS</Title>
      <MentorsFlex>{dataArray}</MentorsFlex>
    </Container>
  );
}
