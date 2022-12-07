import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import HackathonAnnoucementComponent from '../components/HackathonAnnouncement';
import HackathonPrizesComponent from '../components/HackathonPrizes';

import HackathonTimelineComponent from '../components/HackathonTimeline';

const FintechHackathon: NextPage = () => {
  return (
    <VStack>
      <HackathonAnnoucementComponent />;
      <HackathonTimelineComponent />
      <HackathonPrizesComponent />
    </VStack>
  );
};

export default FintechHackathon;
