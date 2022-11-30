import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Faqs } from '../../data/FrequentlyAskedQuestions';
import { Faq } from '../../types/Faq';
import {
  Content,
  ContentWrapper,
  FaqWrapper,
  Header,
  StyledTab,
} from './styles';

export default function FaqComponent() {
  const title = useBreakpointValue({
    base: 'FAQ',
    md: 'Frequently Asked Questions',
  });

  const faqs: Faq[] = Faqs;
  const headers = faqs.map((tab, index) => {
    return (
      <StyledTab
        key={index}
        _selected={{
          color: 'brand.primary',
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          textDecorationThickness: '1.5px',
          textUnderlineOffset: '3px',
        }}
      >
        {tab.categoryName}
      </StyledTab>
    );
  });

  const content = faqs.map((tab, index) => {
    const accordions = tab.data.map((qns, index) => {
      return (
        <AccordionItem my="20px" key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {qns.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} whiteSpace={'pre-line'}>
            {qns.answer}
          </AccordionPanel>
        </AccordionItem>
      );
    });

    return (
      <TabPanel key={index} mt="-5">
        <Accordion variant="custom" defaultIndex={[]}>
          {accordions}
        </Accordion>
      </TabPanel>
    );
  });

  return (
    <FaqWrapper>
      <Header>{title}</Header>
      <ContentWrapper>
        <Content>
          <Tabs variant="unstyled" size="lg">
            <TabList>{headers}</TabList>
            <TabPanels>{content}</TabPanels>
          </Tabs>
        </Content>
      </ContentWrapper>
    </FaqWrapper>
  );
}
