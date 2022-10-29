import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import { HeaderContainer, SponsorWrapper } from './styles';
import { Organisation } from '../../types/Organisation';
import { Organisers, Sponsors } from '../../data/Organisations';

export default function Sponsor() {
  function organisationSection(
    organisations: Organisation[],
    rowLength: number,
  ) {
    const result = [];
    for (var i = 0; i < organisations.length; i = i + rowLength) {
      result.push(organisations.slice(i, i + rowLength));
    }

    return result.map((row) => organisationRow(row));
  }

  function organisationRow(organisations: Organisation[]) {
    const row = organisations.map((organisation) =>
      organisationItem(organisation),
    );

    return (
      <HStack spacing="110" h="75px" justifyContent="center">
        {row}
      </HStack>
    );
  }

  function organisationItem(organisation: Organisation) {
    return (
      <a href={organisation.url} target="_blank" rel="noreferrer">
        <Image src={organisation.logoSrc} h={organisation.logoSize} />
      </a>
    );
  }

  return (
    <SponsorWrapper>
      <HeaderContainer>SPONSORS</HeaderContainer>
      {organisationSection(Sponsors, 3)}

      <HeaderContainer>ORGANISERS</HeaderContainer>
      {organisationSection(Organisers, 3)}
    </SponsorWrapper>
  );
}
