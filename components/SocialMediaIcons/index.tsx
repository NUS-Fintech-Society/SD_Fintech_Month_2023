import { HStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaGlobe, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

type Props = {
    color?: string
}

export default function SocialMediaIcons(props: Props) {
    const iconColor = props.color ?? 'black'

    return (
        <HStack spacing='10'>
            <a href='https://fintechsociety.comp.nus.edu.sg' target="_blank">
                <FaGlobe color={iconColor} />
            </a>
            <a href='https://www.linkedin.com/company/nus-fintech-society/' target="_blank">
                <FaLinkedinIn color={iconColor} />
            </a>
            <a href='https://www.instagram.com/nusfintech/' target="_blank">
                <FaInstagram color={iconColor} />
            </a>
            <a href='https://www.facebook.com/NUSfintech/' target="_blank">
                <FaFacebookF color={iconColor} />
            </a>
        </HStack>
    )
}