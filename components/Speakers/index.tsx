import React from 'react';
import { SpeakersFlex, Container, Title } from './styles';
import SpeakersContainer from './SpeakersContainer';
import { SpeakersInfoArray } from '../../data/Speakers';
import Image from 'next/image';
import Background from '../../public/Background/workshop-background.png';

export default function SpeakersContent() {
  const dataArray = SpeakersInfoArray.sort((speaker1, speaker2) =>
    speaker1.name.localeCompare(speaker2.name),
  ).map((speaker, index) => {
    return <SpeakersContainer key={index} speaker={speaker} />;
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
      <Title>SPEAKERS</Title>
      <SpeakersFlex>{dataArray}</SpeakersFlex>
    </Container>
  );
}
