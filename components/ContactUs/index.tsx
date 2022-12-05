import { Text, Flex, Link, Box, theme } from '@chakra-ui/react';
import { Input, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import {
  PageContainer,
  ContentContainer,
  ContactUsText,
  QueriesAndUpdatesText,
  EmailLink,
  InputAndButtonBox,
  EmailInput,
  ConnectButton,
  ConnectButtonText,
  RowContainer,
} from './styles';

export default function ContactUs() {
  return (
    <PageContainer>
      <ContentContainer>
        <RowContainer>
          <Box>
            <ContactUsText fontWeight="bold" padding="1" pb="0">
              FOLLOW US
            </ContactUsText>
            <QueriesAndUpdatesText>
              Event queries and potential partnerships
            </QueriesAndUpdatesText>
            <EmailLink>nusfintech.ops@gmail.com</EmailLink>
          </Box>
          <InputAndButtonBox>
            <QueriesAndUpdatesText>
              <b>To receive updates</b>
            </QueriesAndUpdatesText>
            <HStack>
              <EmailInput placeholder="email" />
              <ConnectButton>
                <ConnectButtonText>connect</ConnectButtonText>
              </ConnectButton>
            </HStack>
          </InputAndButtonBox>
        </RowContainer>
      </ContentContainer>
    </PageContainer>
  );
}
