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
  FAQSection,
  FAQButton,
} from './styles';

import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';

import BubbleBackground from '../../public/BubbleBackground.png';
import Image from 'next/image';

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
    <MorePageContainer>
      <Image
        src={BubbleBackground}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <HeadingContainer>
        <MorePageHeading colorScheme="brand">
          FTM 2023 in Numbers
        </MorePageHeading>
      </HeadingContainer>

      <FeatureContainer>
        <SimpleGrid columns={[2, 2, 2, 3]} spacing={10}>
          {Feature('300', 'Hackers', true)}
          {Feature('$30,000', 'in Prizes', false)}
          {Feature('128', 'Hours', true)}
          {Feature('30', 'Mentors', true)}
          {Feature('30', 'Speakers', true)}
          {Feature('8', 'Sponsors', true)}
        </SimpleGrid>
      </FeatureContainer>
      <FAQSection>
        <FAQButton colorScheme="brand" onClick={handleClick}>
          Frequently Asked Questions <IoIosArrowForward size={25} />
        </FAQButton>
      </FAQSection>
    </MorePageContainer>
  );
};

export default FeaturePage;
