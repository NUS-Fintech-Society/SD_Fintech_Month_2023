import { HStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import SecondaryBackground from '../../public/SecondaryBackground.png';
import { HeaderContainer, RowContainer, SponsorWrapper } from './styles';
import { Organisation } from '../../types/Organisation';
import {
  Community,
  Gold,
  Media,
  Organisers,
  Platinum,
  Silver,
} from '../../data/Organisations';

export default function Sponsor() {
  const rowSize = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  function organisationSection(
    organisations: Organisation[],
    rowLength: number,
  ) {
    const result = [];
    organisations.sort((organisation1, organisation2) =>
      organisation1.name.localeCompare(organisation2.name),
    );
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
          height={organisation.logoHeight}
          width={organisation.logoWidth}
        />
      </a>
    );
  }

  return (
    <SponsorWrapper overflow="hidden">
      <Image
        src={SecondaryBackground}
        objectFit="contain"
        objectPosition="center"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <HeaderContainer>SPONSORS</HeaderContainer>
      <HeaderContainer>PLATINUM</HeaderContainer>
      {organisationSection(Platinum, rowSize || 1)}

      <HeaderContainer>GOLD</HeaderContainer>
      {organisationSection(Gold, rowSize || 2)}

      <HeaderContainer>SILVER</HeaderContainer>
      {organisationSection(Silver, rowSize || 4)}

      <HeaderContainer>COMMUNITY PARTNERS</HeaderContainer>
      {organisationSection(Community, rowSize || 1)}

      <HeaderContainer>MEDIA PARTNERS</HeaderContainer>
      {organisationSection(Media, rowSize || 2)}

      <HeaderContainer>ORGANISERS</HeaderContainer>
      {organisationSection(Organisers, rowSize || 3)}
    </SponsorWrapper>
  );
}
