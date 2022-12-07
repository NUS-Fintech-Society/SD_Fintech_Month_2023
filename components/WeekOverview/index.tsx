import {Text} from '@chakra-ui/react'
import { WeekEvents, Weeks } from '../../data/WeekEvents';
import { WeekEvent, Week, SpeakerInfo} from '../../types/WeekEvent';
import { useState} from 'react';

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
} from "./styles"
import { ALL } from 'dns';

function generateSpeaker(info : SpeakerInfo){
    return (
         <SpeakerContainer>
             <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'></SpeakerImage>
             <SpeakerDetails>
             <SpeakerLabel fontWeight={"bold"}>{info.speaker}</SpeakerLabel>
             <SpeakerLabel>{info.position}</SpeakerLabel>
             <SpeakerLabel fontWeight={"bold"}>{info.organisation}</SpeakerLabel>
             </SpeakerDetails>
        </SpeakerContainer>
    )
}

function generateWorkshop(event : WeekEvent){
    return (
        <Event>
                <DateAndLocation>
                    <DateAndTime>
                        <BoldText>{event.date}</BoldText>
                        <Time>{event.time}</Time>
                    </DateAndTime>
                    <LocationTag>
                        {event.venue}
                    </LocationTag>
                </DateAndLocation>
                <WorkshopBox>
                    <EventTitle>{event.title}</EventTitle>
                    <EventLabel>{event.label}</EventLabel>
                    {event.label == 'Panel Discussion' ? <AllSpeakers>
                    {event.speakerInfo ? event.speakerInfo.map((info) => generateSpeaker(info)) : <div></div>}
                    </AllSpeakers> : generateSpeaker(event.speakerInfo)}
                </WorkshopBox>
        </Event>
    )
}

function generateNonWorkshop(event : WeekEvent){
    return (
        <Event>
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
    )
}


export default function WeekOverview(){
    const [weekNumber, setWeekNumber] = useState(0);
    return (
        <WeekOverviewContainer>
            <HeadingContainer>WEEK OVERVIEW</HeadingContainer>
            <ButtonPanel>
               {Weeks.map(week => <WeekButton onClick = {() => setWeekNumber(week.id)}><Text>{week.label}</Text><Text>{week.date}</Text></WeekButton>)} 
            </ButtonPanel>
            <SingleWeekContainer>
                <WeekHeader>{Weeks[weekNumber].label}</WeekHeader>
                {WeekEvents[weekNumber].map(event => event.label == "Workshop" || event.label  == "Panel Discussion" ? generateWorkshop(event) : generateNonWorkshop(event))}
            </SingleWeekContainer>
        </WeekOverviewContainer>
    )
}