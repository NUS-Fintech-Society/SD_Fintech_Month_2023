import React from 'react';
import { MainPrizes, OtherPrizes } from '../../data/Prizes';
import { useBreakpointValue } from '@chakra-ui/react';

import { Prizes } from '../../types/Prizes';
import {
  HeadingContainer,
  MainPrizeSection,
  MainPrizeAmount,
  OtherPrizeSection,
  MainPrizeName,
  OtherPrizeAmount,
  OtherPrizeName,
  MainPrizesHeading,
  OtherPrizesHeading,
  PrizesPage,
  OtherPrizeWrapper,
  RowContainer,
  MainPrizeWrapper,
} from './styles';

export default function HackathonPrizes() {
  const rowSize = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  function otherPrizeSection(prizes: Prizes[], rowLength: number) {
    const result = [];

    for (var i = 0; i < prizes.length; i = i + rowLength) {
      result.push(prizes.slice(i, i + rowLength));
    }

    return result.map((row, index) => prizeRow(row, index));
  }

  function prizeRow(prizes: Prizes[], index: number) {
    const row = prizes.map((prize) => otherPrizeItem(prize));

    return (
      <RowContainer spacing="40px" key={index}>
        {row}
      </RowContainer>
    );
  }

  function mainPrizeItem(prize: Prizes) {
    return (
      <MainPrizeWrapper
        transform={prize.name == '1ST PRIZE' ? 'scale(1.1)' : 'scale(1)'}
        boxShadow={`0px 6px 6px 1px ${prize.color}`}
      >
        <MainPrizeName color={prize.color}>{prize.name}</MainPrizeName>
        <MainPrizeAmount color={prize.color}>{prize.reward}</MainPrizeAmount>
      </MainPrizeWrapper>
    );
  }

  function otherPrizeItem(prize: Prizes) {
    return (
      <OtherPrizeWrapper>
        <OtherPrizeName>{prize.name}</OtherPrizeName>
        <OtherPrizeAmount>{prize.reward}</OtherPrizeAmount>
      </OtherPrizeWrapper>
    );
  }

  return (
    <PrizesPage>
      <HeadingContainer>
        <MainPrizesHeading colorScheme="brand">
          HACKATHON PRIZES
        </MainPrizesHeading>
      </HeadingContainer>

      <MainPrizeSection>
        {mainPrizeItem(MainPrizes[1])}
        {mainPrizeItem(MainPrizes[0])}
        {mainPrizeItem(MainPrizes[2])}
      </MainPrizeSection>

      <HeadingContainer>
        <OtherPrizesHeading>OTHER PRIZES</OtherPrizesHeading>
      </HeadingContainer>

      <OtherPrizeSection>
        {otherPrizeSection(OtherPrizes, rowSize || 3)}
      </OtherPrizeSection>
    </PrizesPage>
  );
}
