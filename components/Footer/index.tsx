import React from 'react';
import SocialMediaIcons from '../SocialMediaIcons';
import { FooterContainer, FooterLeftContainer, VerticalLine } from './styles';
import NextLink from 'next/link';
import { Routes } from '../../constants/Routes.enum';
import { Image, Link, Divider } from '@chakra-ui/react';

export default function Footer() {
  <span style={{ marginLeft: '5px', marginRight: '5px' }}>|</span>;
  return (
    <FooterContainer>
      <FooterLeftContainer>
        <SocialMediaIcons color="white" />
        <VerticalLine>
          <Divider
            borderColor="white"
            borderWidth="1px"
            orientation="vertical"
          />
        </VerticalLine>{' '}
        © 2023 NUS FINTECH SOCIETY
        <VerticalLine>
          <Divider
            borderColor="white"
            borderWidth="1px"
            orientation="vertical"
          />
        </VerticalLine>
        ALL RIGHTS RESERVED
      </FooterLeftContainer>
      <NextLink href={Routes.HOME} passHref>
        <Link>
          <Image
            src="/fintechsoc-logo.png"
            w="auto"
            minWidth="auto"
            height="100%"
            alt=""
          />
        </Link>
      </NextLink>
    </FooterContainer>
  );
}
