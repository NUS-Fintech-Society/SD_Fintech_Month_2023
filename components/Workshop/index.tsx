import {
  Row,
  MobileBottom,
  DetailContainer,
  MobileTop,
  RightContent,
  WorkshopContainer,
  WorkshopDetails,
  HeadingContainer,
  WorkshopHeading,
  EventContainer,
  Event,
  DateLabel,
  WorkshopTitle,
  WorkshopSpeaker,
  SpeakerImage,
  SpeakerLabel,
  WorkshopDescription,
  RegisterButton,
  CenterContent,
  DetailLabel,
} from './styles';
import { Workshops } from '../../data/Workshops';
import { Workshop } from '../../types/Workshop';

function getSingleDesktopWorkshopSpeaker(workshop: Workshop) {
  return (
    <WorkshopSpeaker>
      <SpeakerLabel fontWeight={'bold'}>{workshop.organisation}</SpeakerLabel>
      <SpeakerImage
        src={workshop.image}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <SpeakerLabel fontWeight={'bold'}>{workshop.speaker}</SpeakerLabel>
      <SpeakerLabel>{workshop.position}</SpeakerLabel>
    </WorkshopSpeaker>
  );
}

function getSingleMobileWorkshopSpeaker(workshop: Workshop) {
  return (
    <Row>
      <SpeakerImage
        src={workshop.image}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <WorkshopSpeaker>
        {/* <Row justifyContent={'space-evenly'}>s */}
        <SpeakerLabel fontWeight={'bold'}>{workshop.organisation}</SpeakerLabel>
        <SpeakerLabel>{workshop.speaker}</SpeakerLabel>
        {/* </Row> */}
        <SpeakerLabel>{workshop.position}</SpeakerLabel>
      </WorkshopSpeaker>
    </Row>
  );
}

function getSingleDesktopWorkshopDetails(workshop: Workshop) {
  return (
    <WorkshopDetails>
      <DetailLabel>Time:</DetailLabel>
      {workshop.time}
      <DetailLabel>Venue:</DetailLabel>
      {workshop.venue}
    </WorkshopDetails>
  );
}
function getSingleMobileWorkshopDetails(workshop: Workshop) {
  return (
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
  );
}

function getSingleDesktopWorkshopComponent(workshop: Workshop) {
  return (
    <EventContainer>
      {/* @ts-ignore */}
      <DateLabel colorScheme="brand">{workshop.date}</DateLabel>
      <Event>
        <Row justify="center">
          {getSingleDesktopWorkshopSpeaker(workshop)}
          <CenterContent>
            <WorkshopTitle fontWeight={'bold'}>{workshop.name}</WorkshopTitle>
            <WorkshopDescription>{workshop.description}</WorkshopDescription>
          </CenterContent>
          <RightContent>
            {getSingleDesktopWorkshopDetails(workshop)}
            <RegisterButton>
              <a href={workshop.link}>Register</a>
            </RegisterButton>
          </RightContent>
        </Row>
      </Event>
    </EventContainer>
  );
}

function getSingleMobileWorkshopComponent(workshop: Workshop) {
  return (
    <EventContainer>
      {/* @ts-ignore */}
      <DateLabel colorScheme="brand">{workshop.date}</DateLabel>
      <Event>
        <WorkshopTitle>{workshop.name}</WorkshopTitle>
        <MobileTop>
          {getSingleMobileWorkshopSpeaker(workshop)}
          {getSingleMobileWorkshopDetails(workshop)}
        </MobileTop>
        <MobileBottom>
          <WorkshopDescription>{workshop.description}</WorkshopDescription>
          <RegisterButton>
            <a href={workshop.link}>Register</a>
          </RegisterButton>
        </MobileBottom>
      </Event>
    </EventContainer>
  );
}

function renderAllDesktopWorkshops() {
  return (
    <WorkshopContainer>
      <HeadingContainer>
        <WorkshopHeading>WORKSHOPS</WorkshopHeading>
      </HeadingContainer>
      {Workshops.map((workshop) => getSingleDesktopWorkshopComponent(workshop))}
    </WorkshopContainer>
  );
}

function renderAllMobileWorkshops() {
  return (
    <WorkshopContainer>
      <HeadingContainer>
        <WorkshopHeading>WORKSHOPS</WorkshopHeading>
      </HeadingContainer>
      {Workshops.map((workshop) => getSingleMobileWorkshopComponent(workshop))}
    </WorkshopContainer>
  );
}

export { renderAllDesktopWorkshops, renderAllMobileWorkshops };
