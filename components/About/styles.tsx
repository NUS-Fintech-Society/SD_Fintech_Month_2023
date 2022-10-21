import {Flex, Box, Heading, Image, chakra} from '@chakra-ui/react' 

export const AboutContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '100vh',
        flexDirection : 'column',
        align : 'center',
        justifyContent : 'center',
        paddingTop : {base : '15%', md : '5%'}
    }, 
})

export const HeadingContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '15%',
        align : 'center',
        justifyContent : 'center',
        padding : '5%',
        paddingBottom : '7%',
    }
})

export const AboutHeading = chakra(Heading, {
    baseStyle : {
        fontSize : {base : 'xl', md : '4xl'}
    },
})

export const ContentContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '85%',
        direction : {base : 'column-reverse', md :'row'},
        align : 'center',
    }
})

export const LeftContentContainer = chakra(Flex, {
    baseStyle : {
        w : {base:'80%', md:'65%'},
        h : '100%',
        direction : 'column',
        align : 'center',
    }
})

export const FlushTop = chakra(Flex, {
    baseStyle : {
        height : '50%', 
        align : 'center', 
        justifyContent : 'center',
    }
})

export const Centralised = chakra(Flex, {
    baseStyle : {
        justifyContent : 'center',
        align : 'center',
    }
})

export const DescriptionBox = chakra(Box, {
    baseStyle : {
        w : '90%',
        display : 'flex-column',
        borderWidth : '1px',
        borderRadius : '20',
        padding : '20px 10px',
        boxShadow : '0px 2px 1px grey',
        backdropFilter :'blur(6px)',
        color : '#001158'
    } 
})

export const RightContentContainer = chakra(Flex, {
    baseStyles : {
        direction : 'column',
        align : 'center', 
        justify : {base :'center', md : 'start'}, 
        w : {base:'80%', md:'30%'}, 
        h : {base:'50%',md:'100%'}, 
        padding : {base : '20% 0', md :'0'},
    }
})

export const TopImage = chakra(Image, {
    baseStyle : { 
        position : 'relative', 
        zIndex : '2', 
        left : '1rem',
        right : {base :'13rem', md :'13rem'}, 
        bottom : {base : '7rem',md : '0rem'},
        borderRadius : '5px',
        height : '6rem',
        width : '10rem',
    }
})

export const MiddleImage = chakra(Image, {
    baseStyle : { 
        position : 'relative', 
        zIndex : '1', 
        left : {base :'2rem', md :'-4rem'},
        bottom : {base :'1rem', md :'-3rem'},
        borderRadius : '5px',
        height : '12rem',
        width : '15rem',
    }
})

export const BottomImage = chakra(Image, {
    baseStyle : { 
        position : 'relative', 
        zIndex : '2', 
        left : {base :'13rem', md :'-25rem'},
        top : {base : '2rem',md : '9rem'},
        borderRadius : '5px',
        height : '9rem',
        width : '11rem',
    }
})

