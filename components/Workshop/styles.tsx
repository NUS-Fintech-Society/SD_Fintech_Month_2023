import {Flex, Box, Image, Heading,Text, Button, chakra} from '@chakra-ui/react';


export const WorkshopContainer = chakra(Flex,{
    baseStyle : {
        w : '100%',
        h : '100%',
        minH : '100vh',
        flexDirection : 'column',
        alignItems : 'center',
        paddingTop : {base : '15%', md : '5%'}
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

export const EventContainer = chakra(Flex, {
    baseStyle : {
        h : '100%',
        w : '70%',
        flexDirection : 'column',
        alignItems : 'center',
        jusitfy : 'center',
    }
})

export const Event = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '100%',
        flexDirection : 'column',
        px : '0%',
        py : '1%',
        border : '1px',
        borderRadius : '20',
        boxShadow : '0px 2px 1px grey',
    }
})

export const DateLabel = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '5%',
        fontSize : 'lg',
        alignItems :  'center',
        color : '#001158',
        py : '1%',
    }
})

export const Row = chakra(Flex,{
    baseStyle : {
        h : '25%',
        w : '100%',
        alignItems: 'center',
        justify: 'apart',
    }
})

//Left of Row
export const WorkshopSpeaker = chakra(Flex,{
    baseStyle : {
        h : '70%',
        w : '20%',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    }
})

export const SpeakerImage = chakra(Image, {
    baseStyle : {
        borderRadius : 'full',
        h : '35%', 
        w : '35%'
    }
})

export const SpeakerLabel = chakra(Text, {
    baseStyle : {
        fontSize : 'sm',
        color : '#001158',
    }
})

//Center of Row 
export const CenterContent = chakra(Flex,{
    baseStyle : {
        w : '60%',
        h : '100%',
        alignItems : 'center',
        flexDirection : 'column',
        paddingLeft : '1%',
    }
})

export const WorkshopTitle = chakra(Flex, {
    baseStyle : {
        fontSize : 'lg',
        color : '#001158',
        paddingBottom : '2%',
    }
})

export const WorkshopDescription = chakra(Text,{
    baseStyle: {
        h : '90%',
        fontSize : 'sm',
    }
})

//Right of Row 
export const RightContent = chakra(Flex,{
    baseStyle : {
        w : '20%',
        flexDirection : 'column',
        alignItems : 'start',
        h : '100%',
        px : '2%',
        // paddingLeft : '1%',
    }
})

export const WorkshopDetails = chakra(Flex,{
    baseStyle : {
        w : '100%',
        flexDirection : 'column',
        color : '#001158',
        fontSize : 'sm',
        h : '60%',
        paddingBottom : '10%',
        // justifyContent : 'start',
        // paddingLeft : '1%', 
    }
})

export const DetailLabel = chakra(Flex,{
    baseStyle : {
        fontWeight : 'bold',
        // h : '100%',
        // justifyContent : 'start',
        // paddingLeft : '1%',
    }
})

export const RegisterButton = chakra(Button, {
    baseStyle: {
        width: '75%',
        height: '3rem',
        borderRadius: '10',
        color : 'white',
        backgroundColor :'#001158',
        fontWeight : 'normal'
    }
})
