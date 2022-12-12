import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import HackathonAnnoucementComponent from '../components/HackathonAnnouncement';
import HackathonPrizesComponent from '../components/HackathonPrizes';

import HackathonTimelineComponent from '../components/HackathonTimeline';
import HackathonWip from '../components/HackathonWip';

const FintechHackathon: NextPage = () => {
  return (
    // TODO: Restore when Fintech page is ready
    // <VStack>
    //   <HackathonAnnoucementComponent />;
    //   <HackathonTimelineComponent />
    //   <HackathonPrizesComponent />
    // </VStack>

    <HackathonWip />
  );
};

export default FintechHackathon;
