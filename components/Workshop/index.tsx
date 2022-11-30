import { Row, MobileBottom, RightContent, WorkshopContainer,WorkshopDetails, HeadingContainer, WorkshopHeading, EventContainer, Event, DateLabel, WorkshopTitle, WorkshopSpeaker, SpeakerImage, SpeakerLabel, WorkshopDescription, RegisterButton, CenterContent, DetailLabel } from "./styles";
import { Workshops } from '../../data/Workshops';
import { Workshop } from '../../types/Workshop';

function getSingleWorkshopSpeaker(workshop: Workshop){
    return (
        <WorkshopSpeaker>
            <SpeakerLabel>{workshop.organisation}</SpeakerLabel>
            <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
            <SpeakerLabel>{workshop.speaker}</SpeakerLabel>
        </WorkshopSpeaker>
    )
}

function getSingleWorkshopDetails(workshop : Workshop){
    return(
        <WorkshopDetails>
            <DetailLabel>Time:</DetailLabel>
            {workshop.time}
            <DetailLabel>Venue:</DetailLabel>
            {workshop.venue}
        </WorkshopDetails>
    )
}


function getSingleDesktopWorkshopComponent(workshop: Workshop) {
    return (
            <EventContainer>
                <DateLabel colorScheme = "brand" >{workshop.date}</DateLabel>
                    <Event>
                    <Row justify = 'center'>
                        {getSingleWorkshopSpeaker(workshop)}
                        <CenterContent>
                            <WorkshopTitle>{workshop.name}</WorkshopTitle>
                            <WorkshopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit nunc. Phasellus at lectus aliquam, consequat leo quis, cursus enim. Duis eu turpis in dolor luctus sagittis. Curabitur vulputate a turpis porttitor fringilla. Fusce at pretium leo, ac feugiat.Duis eu turpis in dolor luctus sagittis. 
                            </WorkshopDescription>
                        </CenterContent>
                        <RightContent>
                        {getSingleWorkshopDetails(workshop)}
                        <RegisterButton><a href = {workshop.link}>Register</a></RegisterButton>
                        </RightContent>
                    </Row>  
                    </Event>
            </EventContainer>
    )
}

function getSingleMobileWorkshopComponent(workshop: Workshop){
    return (
        <EventContainer>
        <DateLabel colorScheme = "brand" >{workshop.date}</DateLabel>
        <Event>
            <WorkshopTitle >{workshop.name}</WorkshopTitle>
            <Row>
                {getSingleWorkshopSpeaker(workshop)}
                {getSingleWorkshopDetails(workshop)}
            </Row>
            <MobileBottom>
              <WorkshopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit nunc. Phasellus at lectus aliquam, consequat leo quis, cursus enim. Duis eu turpis in dolor luctus sagittis. Curabitur vulputate a turpis porttitor fringilla. Fusce at pretium leo, ac feugiat.Duis eu turpis in dolor luctus sagittis. 
              </WorkshopDescription>
              <RegisterButton><a href = {workshop.link}>Register</a></RegisterButton>
            </MobileBottom>
        </Event>
        </EventContainer>
    )
}

function renderAllDesktopWorkshops() {
    return (
        <WorkshopContainer>
            <HeadingContainer><WorkshopHeading>WORKSHOPS</WorkshopHeading></HeadingContainer>
            {Workshops.map((workshop) => getSingleDesktopWorkshopComponent(workshop))}
        </WorkshopContainer>
    )  
}

function renderAllMobileWorkshops() {
    return (
        <WorkshopContainer>
            <HeadingContainer><WorkshopHeading>WORKSHOPS</WorkshopHeading></HeadingContainer>
            {Workshops.map((workshop) => getSingleMobileWorkshopComponent(workshop))}
        </WorkshopContainer>
    )  
}


export {renderAllDesktopWorkshops, renderAllMobileWorkshops};