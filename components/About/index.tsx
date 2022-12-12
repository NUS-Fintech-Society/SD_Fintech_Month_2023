import {
  AboutContainer,
  AboutHeading,
  HeadingContainer,
  ContentContainer,
  LeftContentContainer,
  FlushTopLeft,
  FlushTopRight,
  Centralised,
  DescriptionBox,
  RightContentContainer,
  TopImage,
  MiddleImage,
  BottomImage,
} from './styles';

const About = () => {
  return (
    <AboutContainer>
      <HeadingContainer>
        <AboutHeading colorScheme="brand">ABOUT FINTECH MONTH</AboutHeading>
      </HeadingContainer>
      <ContentContainer>
        <LeftContentContainer>
          <FlushTopLeft>
            <Centralised align="center">
              <DescriptionBox>
                NUS FinTech month is a series of workshops and panel discussions
                designed to give university and polytechnic students an insight
                into the world of Fintech. The theme for this year will revolve
                around Fintech as a Service. There will be workshops ranging
                from beginner levels to more advanced levels allowing everyone,
                no matter their background, to participate in this. The
                workshops will be held in person as well as broadcast online.
                The workshops will be held in person and broadcasted online. A
                hackathon will also be held where participants will be able to
                tackle current challenges faced in the world of financial
                technology.
              </DescriptionBox>
            </Centralised>
          </FlushTopLeft>
        </LeftContentContainer>

        <RightContentContainer>
          <FlushTopRight>
            <Centralised>
              <TopImage src="AboutImage1.png" />
              <MiddleImage src="AboutImage3.png" />
              <BottomImage src="AboutImage2.png" />
            </Centralised>
          </FlushTopRight>
        </RightContentContainer>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;
