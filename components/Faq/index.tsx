import Icon, { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Collapse } from 'antd';
import React, { ReactNode } from 'react';
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
          color: '#7DCACF',
          fontWeight: 'bold',
        }}
      >
        {tab.categoryName}
      </StyledTab>
    );
  });
  const content = faqs.map((tab, index) => {
    const accordions = tab.data.map((qns, index) => {
      return (
        <StyledPanel
          isActive={false}
          header={qns.question}
          key={index}
          style={{ borderRadius: '10px', overflow: 'hidden' }}
        >
          <p dangerouslySetInnerHTML={{ __html: qns.answer }}></p>
        </StyledPanel>
      );
    });

    return (
      <TabPanel key={index} mt="-5">
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon
              component={
                isActive
                  ? (UpCircleOutlined as React.ForwardRefExoticComponent<any>)
                  : (DownCircleOutlined as React.ForwardRefExoticComponent<any>)
              }
              style={{ fontSize: '20px', lineHeight: '20px' }}
            />
          )}
          expandIconPosition="end"
        >
          {accordions}
        </Collapse>
      </TabPanel>
    );
  });

  return (
    <FaqWrapper className="px-32">
      <Header>{title}</Header>
      <ContentWrapper>
        <Content>
          <Tabs variant="unstyled" size="lg">
            <TabList justifyContent="center">{headers}</TabList>
            <TabPanels>{content}</TabPanels>
          </Tabs>
        </Content>
      </ContentWrapper>
    </FaqWrapper>
  );
}
