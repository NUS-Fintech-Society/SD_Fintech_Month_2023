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

export const WeekContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '100vh',
        flexDirection : 'column',
        px : '5%',
    }
})

export const WeekLabel = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '5%',
        fontSize : '2xl',
        fontWeight : 'bold',
        alignItems :  'center',
        px : '3%'
    }
})

export const Row = chakra(Flex,{
    baseStyle : {
        h : '25%',
        w : '100%',
        alignItems: 'center',
        justify: 'apart',
        paddingBottom : '1%'
    }
})

//Left of Row
export const LeftContent = chakra(Flex,{
    baseStyle : {
        w : '40%',
        h : '100%',
        justifyContent : 'space-evenly',
    }
})

export const WorkshopImageContainer = chakra(Flex,{
    baseStyle : {
        h : '100%',
        w : '65%',
        flexDirection : 'column',
        alignItems : 'center',
    }
})

export const WorkshopImage = chakra(Image,{
    baseStyle : {
        h : '90%',
        w : '100%',
        borderRadius : '8%',
    }
})

export const WorkshopImageLabel = chakra(Text,{
    baseStyle : {
        h : '10%',
        w : '100%',
        fontSize : 'lg',
        color : '#001158',
        textAlign : 'center',
    }
})

export const WorkshopSpeaker = chakra(Flex,{
    baseStyle : {
        h : '90%',
        w : '20%',
        borderWidth : '1px',
        borderColor : '#001158',
        borderRadius :'8%',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    }
})

export const SpeakerImage = chakra(Image, {
    baseStyle : {
        borderRadius : 'full',
        h : '55%', 
    }
})

export const SpeakerLabel = chakra(Text, {
    baseStyle : {
        fontSize : 'sm',
        color : '#001158',
    }
})


//Right of Row 
export const RightContent = chakra(Flex,{
    baseStyle : {
        w : '50%',
        h : '100%',
        justifyContent : 'start',
        paddingLeft : '1%',
    }
})
export const WorkshopDescription = chakra(Text,{
    baseStyle: {
        h : '90%',
        w : '70%',
        fontSize : 'sm',
        color : '#001158',
    }
})

export const WorkshopButtonContainer = chakra(Flex,{
    baseStyle: {
        h : '90%',
        w : '30%',
        flexDirection : 'column',
        justifyContent : 'end',    
        alignItems : 'center', 
    }
})

export const RegisterButton = chakra(Button, {
    baseStyle: {
        width: '85%',
        height: '25%',
        borderRadius: '15px',
        color : 'white',
        backgroundColor :'#001158',
        fontWeight : 'normal'
    }
})