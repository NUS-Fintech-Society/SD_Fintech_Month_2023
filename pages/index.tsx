import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import About from '../components/About';
import IndexMain from '../components/IndexMain/IndexMain';
import Theme from '../components/Theme';
import { useRef } from 'react';
import Timeline from '../components/Timeline';
import ContactUs from '../components/ContactUs';

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
      <Timeline />
      <ContactUs />
    </VStack>
  );
};

export default Home;