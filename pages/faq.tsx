import { useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import FaqComponent from '../components/Faq';

const Faq: NextPage = () => {
  const navBarPadding = useBreakpointValue({ base: '70px', md: '100px' });
  return (
    <div style={{ paddingTop: navBarPadding }}>
      <FaqComponent />
    </div>
  );
};

export default Faq;
