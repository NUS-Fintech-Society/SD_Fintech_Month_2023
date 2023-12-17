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
import Image from 'next/image';
import Background from '../../public/Lines.png';

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
  function setInquiryValue(e: ChangeEvent<HTMLTextAreaElement>) {
    setInquiry(e.target.value);
  }

  async function submitAll() {
    const data = { values: [fullName, company, email, inquiry] };

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      setEmail('');
      setCompany('');
      setFullName('');
      setInquiry('');
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
      return <FailedText>Failed to submit details!</FailedText>;
    }
  }
  const submitStatus = submitSuccessful && <div></div>;

  return (
    <PageContainer>
      <Image
        src={Background}
        objectFit="cover"
        width="80%"
        height="80%"
        layout="fill"
        className="h-screen w-full -z-10 absolute bg-repeat"
        alt="background image"
      />
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
            {getSubmitStatus()}
          </TextAreaFlex>
        </InputAndButtonBox>
      </ContentContainer>
    </PageContainer>
  );
}
