import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import {
  MainBox,
  MentorName,
  MentorImage,
  DetailsText,
  TitleText,
  OrgText,
  DetailsFlex,
  DetailsBox,
} from './styles';

export default function MentorBox({ mentorInfo }: any) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <MainBox>
      <MentorImage src={mentorInfo.image}></MentorImage>
      <MentorName>{mentorInfo.name}</MentorName>

      <TitleText>{mentorInfo.title}</TitleText>
      <OrgText>{mentorInfo.organisation}</OrgText>
    </MainBox>
  );
}
