import { Box, Button, chakra } from "@chakra-ui/react";

export const NavBarContainer = chakra(Box, {
    baseStyle: {
        position: "fixed",
        width: '100%',
        height: '100px',
        background: 'white'
    }
})

export const HackathonButton = chakra(Button, {
    baseStyle: {
        width: '200px',
        height: '40px',
        borderRadius: '20px',
    }
})