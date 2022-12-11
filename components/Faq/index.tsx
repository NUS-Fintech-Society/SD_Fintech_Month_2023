import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Collapse } from 'antd'
import React from 'react';
import { Faqs } from '../../data/FrequentlyAskedQuestions';
import { Faq } from '../../types/Faq';
import {
  Content,
  ContentWrapper,
  FaqWrapper,
  Header,
  StyledPanel,
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
        <StyledPanel header={qns.question} key={index}>
          <p dangerouslySetInnerHTML={{__html: qns.answer}}></p>
        </StyledPanel>
      );
    });

    return (
      <TabPanel key={index} mt="-5">
        <Collapse bordered={false}>
          {accordions}
        </Collapse>
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
