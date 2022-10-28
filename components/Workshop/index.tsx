import { Row, LeftContent, RightContent, WorkshopContainer, HeadingContainer, WorkshopHeading, WeekContainer, WeekLabel, WorkshopImage, WorkshopSpeaker, SpeakerImage, SpeakerLabel, WorkshopImageContainer, WorkshopImageLabel, WorkshopDescription, WorkshopButtonContainer, RegisterButton } from "./styles";

const WorkShop = () => {
    return (
        <WorkshopContainer>
            <HeadingContainer><WorkshopHeading>WORKSHOPS</WorkshopHeading></HeadingContainer>
            <WeekContainer>
                <WeekLabel colorScheme = "brand">Week 1</WeekLabel>
                <Row>
                    <LeftContent>
                        <WorkshopImageContainer>
                            <WorkshopImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
                            <WorkshopImageLabel>01/01/23</WorkshopImageLabel>
                        </WorkshopImageContainer>
                        <WorkshopSpeaker>
                            <SpeakerLabel>Speaker : </SpeakerLabel>
                            <SpeakerImage src = 'gibbresh.png' fallbackSrc = 'https://via.placeholder.com/150'/>
                            <SpeakerLabel>Elon Musk </SpeakerLabel>
                        </WorkshopSpeaker>
                    </LeftContent>
                    <RightContent>
                        <WorkshopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit nunc. Phasellus at lectus aliquam, consequat leo quis, cursus enim. Duis eu turpis in dolor luctus sagittis. Curabitur vulputate a turpis porttitor fringilla. Fusce at pretium leo, ac feugiat.Duis eu turpis in dolor luctus sagittis. 
                        </WorkshopDescription>
                        <WorkshopButtonContainer >
                            <RegisterButton>Register</RegisterButton>
                        </WorkshopButtonContainer>
                    </RightContent>
                </Row>
                
                
            </WeekContainer>
        </WorkshopContainer>
    )
}

export default WorkShop