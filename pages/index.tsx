import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import About from '../components/About';
import IndexMain from '../components/IndexMain/IndexMain';
import Theme from '../components/Theme';
import { useRef } from 'react';
import ContactUs from '../components/ContactUs';
import FeaturePage from '../components/FeaturePage';
import Faq from '../components/Faq';

const Home: NextPage = () => {
  const themePageRef = useRef<null | HTMLDivElement>(null);

  const scrollToThemePage = () => {
    themePageRef.current?.scrollIntoView({
      block: 'end',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  return (
    <VStack spacing={0}>
      <IndexMain scrollToThemePage={scrollToThemePage} />
      <About />
      <Theme />
      <div ref={themePageRef} />
      <FeaturePage />
      <Faq />
      {/*<ContactUs />*/}
    </VStack>
  );
};

export default Home;
