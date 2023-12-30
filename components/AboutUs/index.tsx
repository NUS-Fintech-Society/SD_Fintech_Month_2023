import React from 'react';
import { Image, StackDivider, VStack } from '@chakra-ui/react';
import { ImportantDate } from '../../types/Date';
import { importantDates } from '../../data/ImportantDates';
import {
  AboutUsContainer,
  Description,
  Title,
  Title2,
  Wrapper,
} from './styles';
import Link from 'next/link';

export default function About() {
  const dates: ImportantDate[] = importantDates;

  return (
    <AboutUsContainer className="h-fit">
      <Wrapper>
        <VStack
          divider={<StackDivider borderColor="transparent " />}
          spacing={3}
        >
          <Title>About Us</Title>

          <a
            href="https://fintechsociety.comp.nus.edu.sg/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/fintechsoc-logo.png"
              w="auto"
              minWidth="auto"
              height="80px"
              alt="NUS Fintech Society"
            />
          </a>

          <VStack
            divider={<StackDivider borderColor="transparent" />}
            spacing={0}
          >
            <Title2>Our History</Title2>
            <Description>
              NUS Fintech Society was founded in 2018 in collaboration with NUS
              Fintech Lab under the NUS School of Computing. We identify
              ourselves as Fintech enthusiasts looking for opportunities to
              learn and grow our knowledge, skills and network in the Fintech
              space.
            </Description>
          </VStack>

          <VStack
            divider={<StackDivider borderColor="transparent" />}
            spacing={0}
          >
            <Title2>Mission</Title2>
            <Description>
              To educate students with Fintech knowledge through events and
              industry projects, and connect and establish relationships with
              industry partners
            </Description>
          </VStack>

          <VStack
            divider={<StackDivider borderColor="transparent" />}
            spacing={0}
          >
            <Title2>Vision</Title2>
            <Description>
              To be the leading student-led Fintech Club known for incubating
              industry-ready Fintech talents and industry-grade financial
              digital transformation projects.
            </Description>
          </VStack>
        </VStack>
      </Wrapper>
    </AboutUsContainer>
  );
}
