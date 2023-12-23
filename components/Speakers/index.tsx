import React from 'react';
import { SpeakersFlex, Container, Title } from './styles';
import SpeakersContainer from './SpeakersContainer';
import { SpeakersInfoArray } from '../../data/Speakers';
import Image from 'next/image';

export default function SpeakersContent() {
  const dataArray = SpeakersInfoArray.sort((speaker1, speaker2) =>
    speaker1.name.localeCompare(speaker2.name),
  ).map((speaker, index) => {
    return <SpeakersContainer key={index} speaker={speaker} />;
  });

  return (
    <Container>
      <Title>SPEAKERS</Title>
      <SpeakersFlex>{dataArray}</SpeakersFlex>
    </Container>
  );
}
