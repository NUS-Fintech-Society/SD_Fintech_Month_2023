import React from 'react';
import SocialMediaIcons from '../SocialMediaIcons';
import { FooterContainer, FooterLeftContainer, VerticalLine } from './styles';
import NextLink from 'next/link';
import { Routes } from '../../constants/Routes.enum';
import { Image, Link, Divider } from '@chakra-ui/react';

export default function Footer() {
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
        </VerticalLine>
        <p className="sm:text-xs text-md">© 2023 NUS FINTECH SOCIETY</p>
        <VerticalLine>
          <Divider
            borderColor="white"
            borderWidth="1px"
            orientation="vertical"
          />
        </VerticalLine>
        <p className="sm:text-xs text-md">ALL RIGHTS RESERVED</p>
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
