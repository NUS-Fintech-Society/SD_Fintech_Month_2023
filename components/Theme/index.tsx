import {
  Centralised,
  HeadingContainer,
  MainHeading,
  SubHeading,
  TextBox,
  ThemeHeading,
  ThemePageContainer,
} from './styles';

const Theme = () => {
  return (
    <ThemePageContainer>
      <HeadingContainer>
        <ThemeHeading colorScheme="brand">2023 THEME</ThemeHeading>
      </HeadingContainer>
      <Centralised>
        <TextBox>
          <MainHeading>Fintech Microservices</MainHeading>
          <SubHeading>
            The theme for NUS Fintech Month 2023 will be &quot;Fintech As A
            Service&quot; and for the purpose of the hackathon, we define
            Fintech as a Service (FaaS) as allowing any organization to use APIs
            to embed useful financial-related capabilities into their existing
            applications, products, and services.
          </SubHeading>
        </TextBox>
      </Centralised>
    </ThemePageContainer>
  );
};

export default Theme;
