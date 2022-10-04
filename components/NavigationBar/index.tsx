import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { NavBarContainer } from './styles'

export default function NavigationBar() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <NavBarContainer>
            <Center h='100%' pl='50' pr='50'>
                <HStack justify='space-between' w='100%' h='100%'>
                    <NextLink href='/' passHref>
                        <Link>
                            <Image src='/FintechSocietyLogo.png' w='150px'></Image>
                        </Link>
                    </NextLink>
                    <HStack spacing='20'>
                        <HStack spacing='10'>
                            <Button variant='link'>Home</Button>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='link'>
                                    Programme
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='link'>
                                    About Us
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button variant='link'>Sponsors</Button>
                        </HStack>
                        <Button>Hackathon</Button>
                    </HStack>
                </HStack>
            </Center>
        </NavBarContainer>
    )
}