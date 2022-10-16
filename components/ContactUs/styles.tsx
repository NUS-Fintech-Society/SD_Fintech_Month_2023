import { Text, Flex, Link, Box, chakra, Input, Button, HStack } from "@chakra-ui/react";

export const PageContainer = chakra(Flex, {
    baseStyle: {
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    }
})


export const ContentContainer = chakra(Flex, {
    baseStyle: {
        width: "60vw", //["80vw", "60vw", "60vw"]
        height: "50vh", //["44", "50vh", "50vh"]
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        bg: "rgba(197,202,233,0.8)",
        borderRadius: "2xl",
        pt: "8",
        pl: "8",
        pr: "8",
        pb: "12",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.3)"
    }
})

export const ContactUsText = chakra(Text, {
    baseStyle: {
        fontWeight: "bold",
        fontSize: "5xl", //["lg", "lg", "5xl"] for responsive
        padding: "1",
    }
})

export const QueriesAndUpdatesText = chakra(Text, {
    baseStyle: {
        fontWeight: "medium",
        fontSize: "lg", //["2xs", "2xs", "lg"] for responsive
        pl: "1",
        pt: "0"
    }
})

export const EmailLink = chakra(Link, {
    baseStyle: {
        fontWeight: "normal",
        fontSize: "lg", //["2xs", "2xs", "lg"] for responsive
        color: "#3F51B5",
        textDecoration: "underline",
        pl: "1",
        pt: "0",
        href: "#"
    }
})

export const InputAndButtonBox = chakra(Box, {
    baseStyle: {
        width: "auto" //["full", "auto", "auto"] for responsiveness
    }
})

export const InputAndButtonHStack = chakra(HStack, {
    baseStyle: {
        mb: "8" //["2", "8"] for responsiveness
    }
})

export const EmailInput = chakra(Input, {
    baseStyle: {    
        size: "md", //["sm", "md", "md"] for responsive
        bg: "white",
        placeholder: "email",
        // _placeholder: "email",
        // _placeholderShown: true;
    }
})

export const ConnectButton = chakra(Button, {
    baseStyle: {
        size: "sm", //["sm", "md", "md"] for responsive
        bg: "#1A237E",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.3)",
        _hover: { bg: "#283593" },
    }
})

export const ConnectButtonText = chakra(Text, {
    baseStyle: {
        fontWeight: "light",
        fontSize: "lg", //["xs", "xs", "lg"] for responsive
        color: "white",
        padding: "2" //["0", "0", "2"] for responsive
    }
})