import { SimpleGrid } from '@chakra-ui/react';
import {
  HeadingContainer,
  MorePageHeading,
  MorePageContainer,
  FeatureCard,
  FeatureHeading,
  FeatureSubHeading,
  PlusSymbol,
  FeatureContainer,
} from './styles';

const FeaturePage = () => {
  function Feature(title: String, description: String, showPlus: boolean) {
    return (
      <FeatureCard>
        <FeatureHeading>
          {title}
          <PlusSymbol display={showPlus ? 'inline' : 'none'} as="span">
            +
          </PlusSymbol>
        </FeatureHeading>
        <FeatureSubHeading>{description}</FeatureSubHeading>
      </FeatureCard>
    );
  }

  return (
    <MorePageContainer>
      <HeadingContainer>
        <MorePageHeading colorScheme="brand">
          WE ARE BACK WITH MORE
        </MorePageHeading>
      </HeadingContainer>

      <FeatureContainer>
        <SimpleGrid columns={[0, 2, 2, 3]} spacing={10}>
          {Feature('300', 'Hackers', true)}
          {Feature('$25,000', 'in Prizes', false)}
          {Feature('128', 'Hours', true)}
          {Feature('25', 'Mentors', false)}
          {Feature('25', 'Speakers', false)}
          {Feature('10', 'Sponsors', true)}
        </SimpleGrid>
      </FeatureContainer>
    </MorePageContainer>
  );
};

export default FeaturePage;
