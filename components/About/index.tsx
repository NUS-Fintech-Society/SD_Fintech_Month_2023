import {
    Flex,
    Container,
    Box,
    Text,
    Heading,
    Image
} from '@chakra-ui/react'
import { AboutContainer } from './styles'

const About = () => {
  return (
    <AboutContainer>
        {/* header */}
        <Flex w = '100%' h = '15%' align = 'center' justify={'center'} padding = '5%'>
            <Heading fontSize = {{base : 'xl', md : '2xl'}}>ABOUT FINTECH MONTH</Heading>
        </Flex>
        <Flex w = '100%'  h ={'85%'} direction = {{base : 'column-reverse', md :'row'}} align = 'center'>
            {/* left/bottom of page  */}
            <Flex w = {{base:'80%', md:'65%'}} h = '100%' direction = 'column' align = 'center'>
                <Flex height = '50%' align = 'center' justify= 'center' >
                    <Flex align ='center' justify = 'center' >
                        <Box flexShrink = 'none' w = '90%' display = 'flex-column' borderWidth='1px' borderRadius='20' padding= '20px 10px' boxShadow='0px 2px 1px grey' backdropFilter='blur(6px)'>
                            <p>Donec pellentesque, ligula quis dictum lobortis, quam felis lacinia nulla, eget venenatis enim neque eget eros. Etiam auctor pret, tincidunt convallis quam. Quisque sit amet facilisis elit. </p>
                            <p>Fusce semper neque metus, sit amet convallis lectus bibendum ut. Etiam lobortis dolor vitae turpis accumsan scelerisque.enean eu volutpat quam. Nam lacinia, risus id porttitor varius, mi ipsum hendrerit eros, non aliquam orci lorem quis lorem. Nunc semper venenatis rutrum. </p>
                         </Box>
                    </Flex>
                </Flex>
            </Flex>
            {/* right/top of page */}
            <Flex direction = 'column' align = 'center' justify = {{base :'center', md : 'start'}} w = {{base:'80%', md:'30%'}} h = {{base:'50%',md:'100%'}} padding = {{base : '20% 0', md :'0'}}>
                <Flex h = '50%' w = '90%' align = 'center' justify= 'center' >
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' boxSize='7rem' position = 'relative' zIndex='2' left = '6rem'
                    right = {{base :'13rem', md :'13rem'}} bottom = {{base : '7rem',md : '4rem'}} borderRadius = '5px'/>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' boxSize = '12rem' position = 'relative' zIndex='1' 
                    left = {{base :'2rem', md :'2rem'}} bottom ={{base :'1rem', md :'0'}} borderRadius = '5px'/> 
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' boxSize='9rem' position = 'relative' zIndex='2' right = {{base :'13rem', md :'13rem'}} top = {{base : '2rem',md : '5rem'}} borderRadius = '5px'/>
                </Flex>
            </Flex>
        </Flex>
    </AboutContainer>

  )
}

export default About