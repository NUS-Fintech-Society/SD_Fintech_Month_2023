import { Text, Flex, Link, Box, theme, Center } from '@chakra-ui/react';
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
import Image from 'next/image';
import Newsletter from '../../public/Newsletter.png';

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

    const res = await fetch('/api/email', {
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
        <RowContainer className="mb-10">
          <Box color="#0C1747">
            <ContactUsText className="text-xl">GET OUR WEEKLY</ContactUsText>
            <ContactUsText>NEWSLETTER</ContactUsText>
            <QueriesAndUpdatesText>
              Get weekly updates on the NUS Fintech Society right in your
              mailbox.
            </QueriesAndUpdatesText>
            <EmailLink>nusfintech.ops@gmail.com</EmailLink>
            <QueriesAndUpdatesText fontWeight="bold">
              Subscribe Now!
            </QueriesAndUpdatesText>
          </Box>
          <Image src={Newsletter} objectFit="contain" alt="background image" />
        </RowContainer>
        <RowContainer>
          <InputAndButtonBox>
            <HStack spacing={0}>
              <EmailInput
                placeholder="Email Address"
                onChange={setEmailValue}
                value={email}
              />
              <ConnectButton onClick={submitEmail}>
                <ConnectButtonText>CONNECT</ConnectButtonText>
              </ConnectButton>
            </HStack>
            {getSubmitStatus()}
          </InputAndButtonBox>
        </RowContainer>
        <RowContainer className="text-center">
          <div className="mt-10 w-full" style={{ color: '#B7B7B7' }}>
            <em>Your email is safe with us, we dont spam.</em>
          </div>
        </RowContainer>
      </ContentContainer>
    </PageContainer>
  );
}
