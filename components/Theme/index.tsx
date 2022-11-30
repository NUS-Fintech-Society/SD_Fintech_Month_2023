import {
  Centralised,
  HeadingContainer,
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
        <TextBox>Fintech Microservices</TextBox>
      </Centralised>
    </ThemePageContainer>
  );
};

export default Theme;
