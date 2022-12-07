import { Text, Flex, Link, Box, theme } from '@chakra-ui/react';
import { Input, Button, HStack, VStack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import {
  PageContainer,
  ContentContainer,
  ContactUsText,
  InputFlex,
  TextAreaFlex,
  InquiryTextArea,
  InputAndButtonBox,
  TextInput,
  ConnectButton,
  ConnectButtonText,
  SuccessText,
  FailedText,
} from './styles';

export default function ContactUsPage() {
  const [fullName, setFullName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [inquiry, setInquiry] = useState<string>('');
  const [submitSuccessful, setSubmitSuccessful] = useState<
    boolean | undefined
  >();

  function setFullNameValue(e: ChangeEvent<HTMLInputElement>) {
    setFullName(e.target.value);
  }
  function setCompanyValue(e: ChangeEvent<HTMLInputElement>) {
    setCompany(e.target.value);
  }
  function setEmailValue(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function setInquiryValue(e: ChangeEvent<HTMLInputElement>) {
    setInquiry(e.target.value);
  }

  async function submitAll() {
    const data = { fullName, company, email, inquiry };

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
        <ContactUsText fontWeight="bold" padding="1" pb="0">
          CONTACT US
        </ContactUsText>
        <InputAndButtonBox>
          <InputFlex>
            <TextInput
              placeholder="Full Name"
              onChange={setFullNameValue}
              value={fullName}
            />
            <TextInput
              placeholder="Company"
              onChange={setCompanyValue}
              value={company}
            />
            <TextInput
              placeholder="Email"
              onChange={setEmailValue}
              value={email}
            />
          </InputFlex>
          <TextAreaFlex>
            <InquiryTextArea
              placeholder="Inquiry"
              resize="none"
              onChange={setInquiryValue}
              value={inquiry}
            />

            <ConnectButton onClick={submitAll}>
              <ConnectButtonText>Send</ConnectButtonText>
            </ConnectButton>
          </TextAreaFlex>

          {getSubmitStatus()}
        </InputAndButtonBox>
      </ContentContainer>
    </PageContainer>
  );
}
