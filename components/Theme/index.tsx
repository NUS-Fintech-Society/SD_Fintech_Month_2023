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
    <div className="flex flex-col items-center justify-center relative gap-4">
      <div>
        <ThemeHeading colorScheme="brand" className="text-white">
          Theme
        </ThemeHeading>
      </div>

      <div className="lg:w-1/2 sm:px-20">
        <TextBox>
          <MainHeading>
            Fintech-As-A-<span style={{ color: '#67C3C6' }}>Service</span>
          </MainHeading>
          <SubHeading>
            The theme for this year will revolve around &quot;Fintech As A
            Service&quot; and for the purpose of the hackathon, we define
            Fintech as a Service (FaaS) as allowing any organization to use APIs
            to embed useful financial-related capabilities into their existing
            applications, products, and services.
          </SubHeading>
        </TextBox>
      </div>
    </div>
  );
};

export default Theme;
