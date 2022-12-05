import {Button, chakra, Image, Flex, ModalBody} from '@chakra-ui/react'

export const ModalButton = chakra(Button, {
    baseStyle: {
      height: '4rem',
      width : '4rem',
      zIndex : '999',
      bottom : '20px',
      right : '20px',
      position : 'fixed',
      borderRadius : '50%',
      boxShadow : '1px 1px #888888, 1px -1px #888888, -1px 1px #888888',
  }
  })


export const ModalLogo = chakra(Image, {
    baseStyle: {
      height : '60%',
      width : '100%',
      zIndex : '1000',
  }
});

export const HeaderImage = chakra(Image, {
    baseStyle : {
        height : '2rem',
        px : '0.5rem',
    }
})

export const LeaderBoardModal = chakra(Flex, {
    baseStyle : {
        flexDirection : 'column',
        alignContent : 'center',
        justifyContent : 'center',
        w : '100%',
        backgroundColor : '#E6E6FA',
        borderRadius: '25px',
        py : '2.5%',
    }
})

export const Header = chakra(Flex, {
    baseStyle : {
        w : '100%',
        minH : '2.2rem',
        alignContent : 'center',
        color : '#001158',
        fontWeight : 'bold',
    }
})

export const Row = chakra(Flex, {
    baseStyle : {
        w : '100%',
        minH : '2.2rem',
        justifyContent : 'space-evenly',
        alignContent : 'center',
        color : '#001158',
    }
});

export const MemberDetail= chakra(Flex,{
    baseStyle : {
        w : '25%',
        alignContent : 'center',
        justifyContent : 'center',
    }
})

export const BodyContent = chakra(ModalBody, {
    baseStyle : {
        width : '90%',
        alignSelf : 'center',
        py : '3%',
    }
})

export const MedalImage = chakra(Image, {
    baseStyle : {
        height : '80%',
        width : '50%',
        paddingRight : '10%',
    }
})

export const HeaderContent = chakra(Flex,{
    baseStyle : {
        alignContent : 'center',
        justifyContent : 'center',
    }
})

export const Unavailable = chakra(Flex,{
    baseStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : '10rem',
        px : {base: '5rem', md : '10rem'},
        fontWeight : 'bold',
        fontSize : {base : 'sm' ,md :'xl'}
    }
})
