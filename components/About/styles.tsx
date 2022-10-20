import {Flex, Box, Heading, Image, chakra} from '@chakra-ui/react' 

export const AboutContainer = chakra(Flex, {
    baseStyle : {
        w : '100%',
        h : '100%',
        direction : 'column',
        align : 'center',
        justify : 'center',
        paddingTop : '10%'
    }, 
    sizes: {
        md: {
          paddingTop : '2.5%'
        },
      },
})

