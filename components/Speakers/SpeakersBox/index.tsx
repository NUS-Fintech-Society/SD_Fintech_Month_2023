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
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <MainBox>
      <SpeakerImage src={speakerInfo.image}></SpeakerImage>
      <SpeakerName>{speakerInfo.name}</SpeakerName>

      <TitleText>{speakerInfo.title}</TitleText>
      <OrgText>{speakerInfo.organisation}</OrgText>
      <DetailsFlex>
        <DetailsBox>
          <DetailsText>
            {speakerInfo.date}, {speakerInfo.time}
          </DetailsText>
        </DetailsBox>
        {/* <DetailsBox>
          <DetailsText>{speakerInfo.time}</DetailsText>
        </DetailsBox> */}
      </DetailsFlex>
    </MainBox>
  );
}
