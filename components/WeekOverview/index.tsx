import {
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { WeekEvents, Weeks } from '../../data/WeekEvents';
import { WeekEvent, Week, SpeakerInfo } from '../../types/WeekEvent';
import { useState } from 'react';

import {
  WeekOverviewContainer,
  HeadingContainer,
  ButtonPanel,
  WeekButton,
  SingleWeekContainer,
  WeekHeader,
  DateAndLocation,
  BoldText,
  Time,
  Event,
  NonWorkshopBox,
  EventTitle,
  LocationTag,
  EventLabel,
  DateAndTime,
  WorkshopBox,
  SpeakerImage,
  SpeakerDetails,
  SpeakerLabel,
  SpeakerContainer,
  AllSpeakers,
  ExpandWorkshopButton,
  WorkshopAccordion,
} from './styles';

function generateSpeaker(info: SpeakerInfo) {
  return (
    <SpeakerContainer key={info.id}>
      <SpeakerImage
        src={info.imageSrc}
        fallbackSrc="https://via.placeholder.com/150"
      ></SpeakerImage>
      <SpeakerDetails>
        <SpeakerLabel fontWeight={'bold'}>{info.speaker}</SpeakerLabel>
        <SpeakerLabel>{info.position}</SpeakerLabel>
        <SpeakerLabel fontWeight={'bold'}>{info.organisation}</SpeakerLabel>
      </SpeakerDetails>
    </SpeakerContainer>
  );
}

function generateDesktopWorkshop(event: WeekEvent) {
  return (
    <Event key={event.id}>
      <DateAndLocation>
        <DateAndTime>
          <BoldText>{event.date}</BoldText>
          <Time>{event.time}</Time>
        </DateAndTime>
        {event.venue ? <LocationTag>{event.venue}</LocationTag> : <div />}
      </DateAndLocation>
      <WorkshopBox>
        <EventTitle>{event.title}</EventTitle>
        <EventLabel>{event.label}</EventLabel>
        <AllSpeakers>
          {event.speakerInfo ? (
            event.speakerInfo.map((info) => generateSpeaker(info))
          ) : (
            <div></div>
          )}
        </AllSpeakers>
      </WorkshopBox>
    </Event>
  );
}

function generateMobileWorkshop(event: WeekEvent) {
  return (
    <Event key={event.id}>
      <Flex marginBottom={'-7%'}>
        <DateAndLocation>
          <DateAndTime>
            <BoldText>{event.date}</BoldText>
            <Time>{event.time}</Time>
          </DateAndTime>
          <LocationTag>{event.venue}</LocationTag>
        </DateAndLocation>
        <WorkshopBox>
          <EventTitle>{event.title}</EventTitle>
        </WorkshopBox>
      </Flex>
      <Flex px={'5%'}>
        <WorkshopAccordion width={'100%'} allowMultiple>
          <AccordionItem>
            <ExpandWorkshopButton>
              <AccordionIcon color={'white'}></AccordionIcon>
            </ExpandWorkshopButton>
            <AccordionPanel>
              <EventLabel height={'10%'} py={'2%'} my={'2%'}>
                {event.label}
              </EventLabel>
              {event.label == 'Panel Discussion' ? (
                <AllSpeakers>
                  {event.speakerInfo ? (
                    event.speakerInfo.map((info) => generateSpeaker(info))
                  ) : (
                    <div></div>
                  )}
                </AllSpeakers>
              ) : event.speakerInfo ? (
                generateSpeaker(event.speakerInfo[0])
              ) : (
                <div></div>
              )}
            </AccordionPanel>
          </AccordionItem>
        </WorkshopAccordion>
      </Flex>
    </Event>
  );
}

function generateDesktopNonWorkshop(event: WeekEvent) {
  return (
    <Event key={event.id}>
      <DateAndLocation>
        <DateAndTime>
          <BoldText>{event.date}</BoldText>
          <Time>{event.time}</Time>
        </DateAndTime>
      </DateAndLocation>
      <NonWorkshopBox>
        <EventTitle>{event.title}</EventTitle>
        <EventLabel>{event.label}</EventLabel>
      </NonWorkshopBox>
    </Event>
  );
}

function generateMobileNonWorkshop(event: WeekEvent) {
  return (
    <Event key={event.id}>
      <Flex>
        <DateAndLocation>
          <DateAndTime>
            <BoldText>{event.date}</BoldText>
            <Time>{event.time}</Time>
          </DateAndTime>
        </DateAndLocation>
        <NonWorkshopBox>
          <EventTitle>{event.title}</EventTitle>
          <EventLabel>{event.label}</EventLabel>
        </NonWorkshopBox>
      </Flex>
    </Event>
  );
}

function DesktopWeekOverview() {
  const [WeekNumber, setWeekNumber] = useState(0);
  return (
    <WeekOverviewContainer>
      <HeadingContainer>WEEK OVERVIEW</HeadingContainer>
      <ButtonPanel>
        {Weeks.map((week) => (
          <WeekButton onClick={() => setWeekNumber(week.id)} key={week.id}>
            <Text>{week.label}</Text>
            <Text>{week.date}</Text>
          </WeekButton>
        ))}
      </ButtonPanel>
      <SingleWeekContainer>
        <WeekHeader>{Weeks[WeekNumber].label}</WeekHeader>
        {WeekEvents[WeekNumber].map((event) => generateDesktopWorkshop(event))}
      </SingleWeekContainer>
    </WeekOverviewContainer>
  );
}

function MobileWeekOverview() {
  const [weekNumber, setWeekNumber] = useState(0);
  return (
    <WeekOverviewContainer>
      <HeadingContainer>WEEK OVERVIEW</HeadingContainer>
      <ButtonPanel>
        {Weeks.map((week) => (
          <WeekButton onClick={() => setWeekNumber(week.id)} key={week.id}>
            <Text>{week.id}</Text>
          </WeekButton>
        ))}
      </ButtonPanel>
      <SingleWeekContainer>
        <WeekHeader>{Weeks[weekNumber].label}</WeekHeader>
        {WeekEvents[weekNumber].map((event) => generateMobileWorkshop(event))}
      </SingleWeekContainer>
    </WeekOverviewContainer>
  );
}

export { DesktopWeekOverview, MobileWeekOverview };
