import { AspectRatio, Center, SimpleGrid } from '@chakra-ui/react';
import {
  HeadingContainer,
  MorePageHeading,
  MorePageContainer,
  FeatureCard,
  FeatureHeading,
  FeatureSubHeading,
  PlusSymbol,
  FeatureContainer,
  FAQSection,
  FAQButton,
} from './styles';

import { useRouter } from 'next/router';

const FeaturePage = () => {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/faq');
  };

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
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <MorePageHeading colorScheme="brand" className="text-white">
          Event By The Numbers
        </MorePageHeading>
      </div>

      <div>
        <AspectRatio ratio={1.78}>
          <iframe
            title="fintech month 2023"
            src="https://www.youtube.com/embed/j9sN3RVYQi4?si=VFkpNoih_WByEpWM"
            allowFullScreen
          />
        </AspectRatio>

        <div className="mt-8">
          <SimpleGrid columns={2} spacing={10}>
            {Feature('12', 'Sponsors', true)}
            {Feature('8', 'Speakers', true)}
            {/* {Feature('400', 'Hackers', true)} */}
            {Feature('$40,000', 'in Prizes', false)}
            {Feature('312', 'Hours', true)}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
