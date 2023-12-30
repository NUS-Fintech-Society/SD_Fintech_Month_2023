import React, { useContext } from 'react';
import SocialMediaIcons from '../SocialMediaIcons';
import { FooterContainer, FooterLeftContainer, VerticalLine } from './styles';
import NextLink from 'next/link';
import { Routes } from '../../constants/Routes.enum';
import { Image, Link, Divider } from '@chakra-ui/react';
import { DeviceProvider } from '../../constants/context';

export default function Footer() {
  const { isDesktop } = useContext(DeviceProvider);

  return (
    <FooterContainer className="h-[100px]">
      <FooterLeftContainer
        className={
          !isDesktop ? 'flex-col justify-start' : 'justify-between items-center'
        }
      >
        <SocialMediaIcons color="white" />
        {isDesktop && (
          <VerticalLine>
            <Divider
              borderColor="white"
              borderWidth="1px"
              orientation="vertical"
              mx="30px"
            />
          </VerticalLine>
        )}

        <div className={`flex ${!isDesktop && 'w-full'} sm:justify-start`}>
          <p className={isDesktop ? 'text-md' : 'text-[10px] mt-2'}>
            © 2023 NUS FINTECH SOCIETY
          </p>
        </div>
        {isDesktop && (
          <VerticalLine>
            <Divider
              borderColor="white"
              borderWidth="1px"
              orientation="vertical"
              mx="30px"
            />
          </VerticalLine>
        )}
        <div className={`flex ${!isDesktop && 'w-full'} sm:justify-start`}>
          <p className={isDesktop ? 'text-md' : 'text-[10px]'}>
            ALL RIGHTS RESERVED
          </p>
        </div>
      </FooterLeftContainer>

      <NextLink href={Routes.HOME} passHref>
        <Link className="flex h-full justify-center items-center">
          <div className="relative">
            <Image
              src="/logo_bg.png"
              w="60px"
              alt="Fintech Summit 2024"
              className="rounded-full z-10 relative"
            />

            <div className="absolute -inset-1 rounded-full blur-md bg-gradient-to-br from-[#faa307] via-[#f3ecdb] to-[#e6be84] "></div>
          </div>
        </Link>
      </NextLink>
    </FooterContainer>
  );
}
