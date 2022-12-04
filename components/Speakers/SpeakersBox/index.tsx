import { useBreakpointValue } from '@chakra-ui/react';
import { InferGetServerSidePropsType } from 'next';
import NextLink from 'next/link';
import React from 'react';
import {
  MainBox,
  SpeakerName,
  SpeakerImage,
  DetailsText,
  TitleText,
  OrgText,
  DetailsFlex,
  DetailsBox,
} from './styles';

export default function SpeakerBox({ speakerInfo }: any) {
  // let name = props.Name;
  // let week = props.Week;
  // let date = props.Date;
  // let description = props.Description;

  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <MainBox>
      <SpeakerName>{speakerInfo.name}</SpeakerName>
      <SpeakerImage src={speakerInfo.image}></SpeakerImage>
      <DetailsFlex>
        <DetailsBox>
          <DetailsText>{speakerInfo.date}</DetailsText>
        </DetailsBox>
        <DetailsBox>
          <DetailsText>{speakerInfo.time}</DetailsText>
        </DetailsBox>
      </DetailsFlex>
      <TitleText>{speakerInfo.title}</TitleText>
      <OrgText>{speakerInfo.organisation}</OrgText>
    </MainBox>
  );
}
