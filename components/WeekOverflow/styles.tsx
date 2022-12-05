import {Flex,Image, Heading,Text, Button, chakra} from '@chakra-ui/react';

export const WorkshopContainer = chakra(Flex,{
    baseStyle : {
        w : '100%',
        h : '100%',
        minH : '100vh',
        flexDirection : 'column',
        alignItems : 'center',
        // justify : '',
        py : {base : '15%', md : '5%'}
    },
})

export const HeadingContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '15%',
        align : 'center',
        justifyContent : 'center',
        paddingTop : '5%',
    }
})

export const WorkshopHeading = chakra(Heading, {
    baseStyle : {
        fontSize : {base : 'xl', md : '4xl'}
    },
})