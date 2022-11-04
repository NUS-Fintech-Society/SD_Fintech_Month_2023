import { Box, Button, Center, chakra, HStack } from "@chakra-ui/react";

export const NavBarContainer = chakra(Box, {
    baseStyle: {
        position: "fixed",
        width: '100%',
        height: '100px',
        background: 'white',
        zIndex:"1"
    }
})

export const CenterContainer = chakra(Center, {
    baseStyle: {
        h: '100%',
        pl: '50',
        pr: '50'
    }
})

export const HStackContainer = chakra(HStack, {
    baseStyle: {
        justifyContent: 'space-between',
        w: '100%',
        h: '100%'
    }
})

export const HackathonButton = chakra(Button, {
    baseStyle: {
        width: '200px',
        height: '40px',
        borderRadius: '20px',
    }
})