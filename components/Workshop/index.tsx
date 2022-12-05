import { Row, MobileBottom, DetailContainer, MobileTop, RightContent, WorkshopContainer,WorkshopDetails, HeadingContainer, WorkshopHeading, EventContainer, Event, DateLabel, WorkshopTitle, WorkshopSpeaker, SpeakerImage, SpeakerLabel, WorkshopDescription, RegisterButton, CenterContent, DetailLabel } from "./styles";
import { Workshops } from '../../data/Workshops';
import { Workshop } from '../../types/Workshop';

function getSingleDesktopWorkshopSpeaker(workshop: Workshop){
    return (
        <WorkshopSpeaker>
            
            <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
            <SpeakerLabel fontWeight = {'bold'}>{workshop.speaker}</SpeakerLabel>
            <SpeakerLabel>{workshop.position}</SpeakerLabel>
            <SpeakerLabel fontWeight = {'bold'}>{workshop.organisation}</SpeakerLabel>
        </WorkshopSpeaker>
    )
}

function getSingleMobileWorkshopSpeaker(workshop: Workshop){
    return (
        <Row>
            <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
            <WorkshopSpeaker>
                {/* <Row justifyContent={'space-evenly'}>s */}
                <SpeakerLabel fontWeight = {'bold'}>{workshop.organisation}</SpeakerLabel>
                <SpeakerLabel>{workshop.speaker}</SpeakerLabel>
                {/* </Row> */}
                <SpeakerLabel>{workshop.position}</SpeakerLabel>
            </WorkshopSpeaker>
        </Row>
    )
}

function getSingleDesktopWorkshopDetails(workshop : Workshop){
    return(
        <WorkshopDetails>
            <DetailLabel>Time:</DetailLabel>
            {workshop.time}
            <DetailLabel>Venue:</DetailLabel>
            {workshop.venue}
        </WorkshopDetails>
    )
}
function getSingleMobileWorkshopDetails(workshop : Workshop){
    return(
        <WorkshopDetails>
            <DetailContainer>
                <DetailLabel>Time:</DetailLabel>
                {workshop.time}
            </DetailContainer>
            <DetailContainer>
                <DetailLabel>Venue:</DetailLabel>
                {workshop.venue}
            </DetailContainer>
        </WorkshopDetails>
    )
}


function getSingleDesktopWorkshopComponent(workshop: Workshop) {
    return (
            <EventContainer>
                <DateLabel colorScheme = "brand" >{workshop.date}</DateLabel>
                    <Event>
                    <Row justify = 'center'>
                        {getSingleDesktopWorkshopSpeaker(workshop)}
                        <CenterContent>
                            <WorkshopTitle fontWeight={"bold"}>{workshop.name}</WorkshopTitle>
                            <WorkshopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit nunc. Phasellus at lectus aliquam, consequat leo quis, cursus enim. Duis eu turpis in dolor luctus sagittis. Curabitur vulputate a turpis porttitor fringilla. Fusce at pretium leo, ac feugiat.Duis eu turpis in dolor luctus sagittis. 
                            </WorkshopDescription>
                        </CenterContent>
                        <RightContent>
                        {getSingleDesktopWorkshopDetails(workshop)}
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
            <MobileTop>
                {getSingleMobileWorkshopSpeaker(workshop)}
                {getSingleMobileWorkshopDetails(workshop)}
            </MobileTop>
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