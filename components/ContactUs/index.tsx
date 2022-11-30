import { Text, Flex, Link, Box, theme } from "@chakra-ui/react";
import { Input, Button, HStack } from "@chakra-ui/react";
import React from "react";
import {
  PageContainer,
  ContentContainer,
  ContactUsText,
  QueriesAndUpdatesText,
  EmailLink,
  InputAndButtonBox,
  InputAndButtonHStack,
  EmailInput,
  ConnectButton,
  ConnectButtonText,
} from "./styles";

export default function ContactUs() {
  return (
    <PageContainer>
      <ContentContainer>
        <ContactUsText
          fontWeight="bold"
          fontSize={["lg", "lg", "5xl"]}
          padding="1"
          pb="0"
        >
          CONTACT US
        </ContactUsText>
        <Box>
          <QueriesAndUpdatesText>EVENT QUERIES AND POTENTIAL PARTNERSHIPS</QueriesAndUpdatesText>
          <EmailLink>
            nusfintech.ops@gmail.com
          </EmailLink>
        </Box>
        <InputAndButtonBox>
          <QueriesAndUpdatesText>
            TO RECEIVE UPDATES
          </QueriesAndUpdatesText>
          <InputAndButtonHStack>
            <EmailInput placeholder="email" />
            <ConnectButton>
              <ConnectButtonText>connect</ConnectButtonText>
            </ConnectButton>
          </InputAndButtonHStack>
        </InputAndButtonBox>
      </ContentContainer>
    </PageContainer>
  );
}
