import { Text, Flex, Link, Box, theme } from '@chakra-ui/react';
import { Input, Button, HStack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
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
  SuccessText,
  FailedText,
} from './styles';

export default function ContactUs() {
  const [email, setEmail] = useState<string>('');
  const [submitSuccessful, setSubmitSuccessful] = useState<
    boolean | undefined
  >();

  function setEmailValue(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function submitEmail() {
    const data = { email };

    const res = await fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      setEmail('');
      setSubmitSuccessful(true);
    } else {
      setSubmitSuccessful(false);
    }
  }

  function getSubmitStatus() {
    if (submitStatus === undefined) {
      return <></>;
    } else if (submitStatus) {
      return <SuccessText>Success!</SuccessText>;
    } else {
      return <FailedText>Failed to submit Email!</FailedText>;
    }
  }
  const submitStatus = submitSuccessful && <div></div>;

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
            <QueriesAndUpdatesText>To receive updates</QueriesAndUpdatesText>
            <HStack>
              <EmailInput
                placeholder="Enter your email here..."
                onChange={setEmailValue}
                value={email}
              />
              <ConnectButton onClick={submitEmail}>
                <ConnectButtonText>Connect</ConnectButtonText>
              </ConnectButton>
            </HStack>
            {getSubmitStatus()}
          </InputAndButtonBox>
        </RowContainer>
      </ContentContainer>
    </PageContainer>
  );
}
