import { HStack, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { HeaderContainer, RowContainer, SponsorWrapper } from './styles';
import { Organisation } from '../../types/Organisation';
import { Organisers, Sponsors } from '../../data/Organisations';

export default function Sponsor() {
  const rowSize = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  function organisationSection(
    organisations: Organisation[],
    rowLength: number,
  ) {
    const result = [];
    for (var i = 0; i < organisations.length; i = i + rowLength) {
      result.push(organisations.slice(i, i + rowLength));
    }

    return result.map((row, index) => organisationRow(row, index));
  }

  function organisationRow(organisations: Organisation[], index: number) {
    const row = organisations.map((organisation) =>
      organisationItem(organisation),
    );

    return (
      <RowContainer spacing="110" key={index}>
        {row}
      </RowContainer>
    );
  }

  function organisationItem(organisation: Organisation) {
    return (
      <a
        href={organisation.url}
        target="_blank"
        rel="noreferrer"
        key={organisation.name}
      >
        <Image
          src={organisation.logoSrc}
          alt={organisation.name}
          h={organisation.logoSize}
        />
      </a>
    );
  }

  return (
    <SponsorWrapper>
      <HeaderContainer>SPONSORS</HeaderContainer>
      {organisationSection(Sponsors, rowSize || 3)}

      <HeaderContainer>ORGANISERS</HeaderContainer>
      {organisationSection(Organisers, rowSize || 3)}
    </SponsorWrapper>
  );
}
