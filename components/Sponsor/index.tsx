import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import { HeaderContainer } from './styles'




export default function Sponsor() {
    
    const property = {
        imageUrl1: '/Sponsor/bybit-logo-trans.png',
        imageUrl2: '/Sponsor/ripple-logo.png',
        imageUrl3: '/Sponsor/stellar-logo.png',
        imageUrl4: '/FintechSocietyLogo.png',
        imageUrl5: '/Sponsor/nus_ftl_logo.png'
    }


    return (<Box  width="100vw" minHeight="100vh" justifyContent="center" bgImage="url('/Background/sponsor-background.png')" bgSize="cover" bgPosition="center">
        
        <HeaderContainer>SPONSORS</HeaderContainer>
        
        <HStack spacing='110'  h="75px" justifyContent="center" >
            
            <a href='https://www.bybit.com/en-US/' target="_blank">
            <Image src={property.imageUrl1} h="60px"/>
            </a>
            <a href='https://ripple.com/' target="_blank">
            <Image src={property.imageUrl2} h="100px"/>
            </a>
            <a href='https://stellar.org/lumens' target="_blank">
            <Image src={property.imageUrl3} h="75px"/>
            </a>
            
        </HStack>

        <HeaderContainer>ORGANISERS</HeaderContainer>

        <HStack spacing='100'  h="75px"  justifyContent="center">
            
            <a href='https://fintechsociety.comp.nus.edu.sg' target="_blank">
            <Image src={property.imageUrl4} h="100px"/>
            </a>
            <a href='https://fintechlab.nus.edu.sg/' target="_blank">
            <Image src={property.imageUrl5} h="100px"/>
            </a>
            
            
        </HStack>
        
        </Box>
    )
}