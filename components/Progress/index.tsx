import { Center } from '@chakra-ui/react';
import {
    ProgressWrapper,
    Title
  } from './styles';

export default function Progress() {

    return (
        <ProgressWrapper>
            <Title>WORK IN PROGRESS</Title>
            <Center>
            <img src='/progress.png' alt="Image" />
            </Center>
        </ProgressWrapper>
    )

}