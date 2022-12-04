import { ChevronDownIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import SpeakerBox from '../SpeakersBox';
import { SpeakersFlex, Container, Title } from './styles';
import { Speaker } from '../../../types/Speaker';
import { SpeakersInfoArray } from '../../../data/Speakers';

export default function SpeakerContainer() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Container>
        <Title>SPEAKERS</Title>
        <SpeakersFlex>
          <SpeakerBox speakerInfo={SpeakersInfoArray[0]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[1]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[2]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[3]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[4]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[5]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[6]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[7]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[8]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[9]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[10]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[11]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[12]}></SpeakerBox>
          <SpeakerBox speakerInfo={SpeakersInfoArray[13]}></SpeakerBox>
        </SpeakersFlex>
      </Container>
    </>
  );
}
