import React from 'react';
import Image from 'next/image';
import SecondaryBackground from '../../public/SecondaryBackground.png';
import { Stack, StackDivider, VStack } from '@chakra-ui/react';
import { ImportantDate } from '../../types/Date';
import { importantDates } from '../../data/ImportantDates';
import {
  AboutUsContainer,
  Description,
  Title,
  Title2,
  Wrapper,
} from './styles';

export default function About() {
  const dates: ImportantDate[] = importantDates;

  return (
    <AboutUsContainer>
      <Image
        src={SecondaryBackground}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <Wrapper>
        <VStack
          divider={<StackDivider borderColor="transparent " />}
          spacing={3}
          align="stretch"
        >
          <Title>ABOUT US</Title>
          <VStack
            divider={<StackDivider borderColor="transparent" />}
            spacing={0}
            align="stretch"
          >
            <Title2>Our History</Title2>
            <Description>
              {' '}
              NUS Fintech Society was founded in 2018 in collaboration with NUS
              Fintech Lab under the NUS School of Computing. We identify
              ourselves as Fintech enthusiasts looking for opportunities to
              learn and grow our knowledge, skills and network in the Fintech
              space.
            </Description>
          </VStack>

          <Stack direction={['column', 'column', 'row']} spacing={7}>
            <VStack
              divider={<StackDivider borderColor="transparent" />}
              spacing={0}
              align="stretch"
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
              align="stretch"
            >
              <Title2>Vision</Title2>
              <Description>
                {' '}
                To be the leading student-led Fintech Club known for incubating
                industry-ready Fintech talents and industry-grade financial
                digital transformation projects.{' '}
              </Description>
            </VStack>
          </Stack>
        </VStack>
      </Wrapper>
    </AboutUsContainer>
  );
}
