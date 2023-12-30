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
    <div className="flex w-3/4 2xl:w-1/2 2xl:px-20 xl:px-16 mt-8 flex-col items-center justify-center relative gap-4">
      <div>
        <ThemeHeading colorScheme="brand" className="text-white">
          Theme
        </ThemeHeading>
      </div>

      <div className="w-full">
        <TextBox className="py-4">
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

      <div className="mt-24">
        <ThemeHeading colorScheme="brand" className="text-white">
          Problem Statements
        </ThemeHeading>
      </div>

      <div className="w-full">
        <TextBox className="py-4" style={{ maxHeight: 175 }}>
          <MainHeading>By aelf</MainHeading>
          <SubHeading>
            What kind of enterprise solutions / products can we build on Aelf to
            make it more user-friendly to the masses?
          </SubHeading>
        </TextBox>
      </div>

      <div className="w-full mt-4">
        <TextBox className="py-4" style={{ maxHeight: 175 }}>
          <MainHeading>By Tokka Labs</MainHeading>
          <SubHeading>
            How can we model and estimate the impermanent loss in a
            forward-looking perspective? How can an LP optimize the return and
            minimize the impermanent loss with innovative minting and hedging
            strategy?
          </SubHeading>
        </TextBox>
      </div>

      <div className="w-full mt-4">
        <TextBox className="py-4" style={{ maxHeight: 175 }}>
          <MainHeading>By Nothern Trust</MainHeading>
          <SubHeading>
            How might we rethink the interoperability of tokens to enable
            seamless and secure movement of digital assets across chains,
            unlocking diverse liquidity pools for financial institutions to
            reshape the digital assets trading landscape?
          </SubHeading>
        </TextBox>
      </div>

      <div className="w-full mt-4">
        <TextBox className="py-4" style={{ maxHeight: 175 }}>
          <MainHeading>By Ripple</MainHeading>
          <SubHeading>
            How can we utilize the XRPL and its EVM sidechain to create a DeFi
            application that tackles a specific, real-world financial challenge
            or significantly enhances existing financial systems?
          </SubHeading>
        </TextBox>
      </div>
    </div>
  );
};

export default Theme;
