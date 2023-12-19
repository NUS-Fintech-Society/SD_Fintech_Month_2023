import { useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import FaqComponent from '../components/Faq';

const Faq: NextPage = () => {
  return (
    <div className="bg-[#20345b] py-16 h-screen">
      <FaqComponent />
    </div>
  );
};

export default Faq;
