import {Flex,Image,Text, Button, Box,chakra} from '@chakra-ui/react';

export const WeekOverviewContainer = chakra(Flex,{
    baseStyle : {
        w : '100%',
        h : '100%',
        minH : '100vh',
        flexDirection : 'column',
        alignItems : 'center',
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
        fontSize : {base : 'xl', md : '4xl'},
        fontWeight : 'bold',
    }
})

export const ButtonPanel = chakra(Flex,{
    baseStyle : {
        w : '100%',
        minH : '20%',
        px : '25%',
        py : '3%', 
    }
})

export const WeekButton = chakra(Button,{
    baseStyle: {
      width: '200px',
      display : 'flex',
      flexDirection : 'column',
      py : '30px',
      borderRadius: '20px',
      backgroundColor : '#dbd5eb',
      fontWeight : 'normal',
      fontSize : 'sm',
      mx : '2%',
      _hover : {
        bg : '#001158',
        color : 'white'
      },
      _focus :{
        bg : '#001158',
        color : 'white'
      },
    },
})

export const SingleWeekContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        flexDirection : 'column',
        alignContent : 'center',
        justifyContent : 'space-evenly',
        px : '15%',
    }
})

export const WeekHeader = chakra(Flex,{
    baseStyle :{
        alignContent : 'center',
        color : '#001158',
        fontSize : '2xl',
        fontWeight : 'bold',
    }
})

export const Event = chakra(Flex,{
    baseStyle : {
        justifyContent : 'space-apart',
        minH : '12rem',
        py : '3%',
        px : '2%',
        w : '100%',
        border : '1px solid',
        borderColor : 'grey',
        borderRadius : '10px',
        my : '20px',
    }
})

//reusable 
export const BoldText = chakra(Flex, {
    baseStyle : {
        color : '#001158',
        fontWeight : 'bold',
        // paddingRight : '2%',
        fontSize : 'md',
    }
})

export const NormalText = chakra(Flex, {
    baseStyle : {
        color : '#001158',
        fontSize : 'sm',
    }
})

export const EventLabel = chakra(Flex,{
    baseStyle : {
        backgroundColor : '#001158',
        color : 'white',
        alignContent : 'center',
        justifyContent : 'center',
        width : '100%',
        py : '1%',
        fontWeight : 'bold',
        borderRadius : '5px',
        fontSize : 'sm',
    }
})

export const LocationTag = chakra(Flex,{
    baseStyle : {
        backgroundColor : '#001158',
        color : 'white',
        alignContent : 'center',
        justifyContent : 'center',
        width : '60%',
        fontWeight : 'bold',
        py : '3%',
        px : '5%',
        borderRadius : '5px',
        fontSize : 'sm',
    }
})

//date and time block
export const DateAndLocation = chakra(Flex, {
    baseStyle : {
        flexDirection : 'column',
        w : '20%',
        alignItems : 'center',
        alignContent : 'center',
    }
})

export const DateAndTime = chakra(Flex, {
    baseStyle : {
        w : '100%',
        alignItems : 'center',
        textAlign : 'center',
        paddingBottom : '10px',
        justifyContent : 'space-evenly',
        px : '5%',
    }
})

export const Time = chakra(Flex, {
    baseStyle : {
        color : '#001158',
        fontSize : 'sm',
    }
})


export const EventTitle = chakra(Flex,{
    baseStyle : {
        color : '#001158',
        fontSize : 'xl',
        paddingBottom : '15px',
        fontWeight : 'bold',
    }
})

//descriptionBox 
export const NonWorkshopBox = chakra(Flex,{
    baseStyle:{
        width : '75%',
        paddingBottom : '2%',
        flexDirection : 'column',
        px : '7.5%',
        justifyContent : 'space-between',
    }
})

export const WorkshopBox = chakra(Flex,{
    baseStyle:{
        width : '75%',
        flexDirection : 'column',
        px : '7.5%',
        justifyContent : 'space-apart',
        minH : '300px',
    }
})

//Workshop Speaker 
export const SpeakerContainer = chakra(Flex,{
    baseStyle : {
        height : '50%',
        width : '50%',
        paddingTop : '20px',
        alignContent : 'center',
        // justifyContent : 'center',
    }
})

export const SpeakerDetails = chakra(Flex,{
    baseStyle : {
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        h : '100%',
        px : '3%',
    }

})

export const SpeakerImage = chakra(Image, {
    baseStyle : {
        borderRadius : 'full',
        w : '7rem',
        h : '7rem', 
    }
})

export const SpeakerLabel = chakra(Text, {
    baseStyle : {
        fontSize : 'sm',
        color : '#001158',
        py : {base : '1%', md : '0%'},
    }
})

export const AllSpeakers = chakra(Flex, {
    baseStyle : {
        w : '100%',
        flexWrap : 'wrap',
    }
})
