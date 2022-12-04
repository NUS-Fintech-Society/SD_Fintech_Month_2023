import {
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
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

export default function MentorBox({ MentorInfo }: any) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <MainBox>
      <MentorName>{MentorInfo.name}</MentorName>
      <MentorImage src={MentorInfo.image}></MentorImage>
      <TitleText>{MentorInfo.title}</TitleText>
      <OrgText>{MentorInfo.organisation}</OrgText>
    </MainBox>
  );
}
