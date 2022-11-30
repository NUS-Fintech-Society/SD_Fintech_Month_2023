import { Row,  RightContent, WorkshopContainer,WorkshopDetails, HeadingContainer, WorkshopHeading, EventContainer, Event, DateLabel, WorkshopTitle, WorkshopSpeaker, SpeakerImage, SpeakerLabel, WorkshopDescription, RegisterButton, CenterContent, DetailLabel } from "./styles";

const WorkShop = () => {
    return (
        <WorkshopContainer>
            <HeadingContainer><WorkshopHeading>WORKSHOPS</WorkshopHeading></HeadingContainer>
            <EventContainer>
                <DateLabel colorScheme = "brand" >Monday, 9 Jan 2023</DateLabel>
                    <Event>
                    <Row justify = 'center'>
                        <WorkshopSpeaker>
                                <SpeakerLabel>PayerMax </SpeakerLabel>
                                <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
                                <SpeakerLabel>Lee Yi Liang</SpeakerLabel>
                        </WorkshopSpeaker>
                        <CenterContent>
                            <WorkshopTitle>Navigating the Payments Space in the Digital Age & Careers in Fintech Startups </WorkshopTitle>
                            <WorkshopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit nunc. Phasellus at lectus aliquam, consequat leo quis, cursus enim. Duis eu turpis in dolor luctus sagittis. Curabitur vulputate a turpis porttitor fringilla. Fusce at pretium leo, ac feugiat.Duis eu turpis in dolor luctus sagittis. 
                            </WorkshopDescription>
                        </CenterContent>
                        <RightContent>
                        <WorkshopDetails>
                            <DetailLabel>Time:</DetailLabel>
                            6pm - 7.30pm
                            <DetailLabel>Venue:</DetailLabel>
                            COM3 - MPSH1- 01-26
                        </WorkshopDetails>
                        <RegisterButton>Register</RegisterButton>
                        </RightContent>
                    </Row>  
                    </Event>
                </EventContainer>
        </WorkshopContainer>
    )
}

export default WorkShop