import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Button,
    Center,
    HStack,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { HackathonButton, NavBarContainer } from './styles'
import SocialMediaIcons from '../SocialMediaIcons'

export default function NavigationBar() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <NavBarContainer>
            <Center h='100%' pl='50' pr='50'>
                <HStack justify='space-between' w='100%' h='100%'>
                    <HStack spacing='20'>
                        <NextLink href='/' passHref>
                            <Link>
                                <Image src='/FintechSocietyLogo.png' w='150px' minWidth='150px'></Image>
                            </Link>
                        </NextLink>
                        <SocialMediaIcons />
                    </HStack>
                    <HStack spacing='20'>
                        <HStack spacing='10'>
                            <Button variant='link' colorScheme='black'>Home</Button>
                            <Menu>
                                <MenuButton as={Button} colorScheme='black' rightIcon={<ChevronDownIcon />} variant='link'>
                                    Programme
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} colorScheme='black' rightIcon={<ChevronDownIcon />} variant='link'>
                                    About Us
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button variant='link' colorScheme='black'>Sponsors</Button>
                        </HStack>
                        <HackathonButton colorScheme='brand'>Fintech Hackathon</HackathonButton>
                    </HStack>
                </HStack>
            </Center>
        </NavBarContainer>
    )
}