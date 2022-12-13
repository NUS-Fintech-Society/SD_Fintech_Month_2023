import { Box, Flex } from '@chakra-ui/react';
import WaterEffect from '../../public/WaterEffect.png';
import LinesEffect from '../../public/LinesEffect.png';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ImportantDates from '../ImportantDates';
import LeaderBoard from '../LeaderBoard';
import { ThemeButton, Title, WorkshopButton } from './styles';
import { useRouter } from 'next/router';

type Props = {
  scrollToThemePage: Function;
};

export default function IndexMain(props: Props) {
  const { scrollToThemePage } = props;
  const router = useRouter();

  const handleHackathonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open('https://forms.gle/woaewfoX4pW9nJMZA');
    //router.push('/fintechHackathon');
  };

  const handleWorkshipClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/workshops');
  };

  const importantDatesSection = (
    <Flex direction="column" alignItems="center">
      <ImportantDates />
      <Flex px="5" justifyContent="space-between" mt="40px">
        <WorkshopButton
          colorScheme="brand"
          fontWeight="bold"
          fontSize="lg"
          mr="30px"
          onClick={handleHackathonClick}
        >
          Hackathon
        </WorkshopButton>
        <WorkshopButton
          colorScheme="brand"
          fontWeight="bold"
          fontSize="lg"
          ml="30px"
          onClick={handleWorkshipClick}
        >
          Workshops
        </WorkshopButton>
      </Flex>
    </Flex>
  );

  return (
    <Box>
      {/* <Image
        width="100vw"
        height="100vh"
        src="/WaterEffect.png"
        alt="background image"
        objectFit="cover"
        objectPosition="center"
      />
       */}
      <Box
        display="flex"
        zIndex={'1'}
        alignItems="center"
        justifyContent="center"
        backgroundImage="url('/WaterEffect.png')"
        style={{
          width: '100vw',
          height: '100vh',
          paddingLeft: '80px',
          paddingRight: '80px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Flex direction="row" justifyContent="space-around" mt="30px">
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            mr={{ base: '0px', lg: '80px' }}
          >
            <Flex direction="column" alignItems="center">
              <Title>NUS FINTECH MONTH 2023</Title>
              <ThemeButton
                colorScheme="brand"
                fontWeight="bold"
                fontSize="2xl"
                onClick={scrollToThemePage}
                mb={{ base: '0px', md: '80px' }}
              >
                Fintech-as-a-Service
              </ThemeButton>
            </Flex>
            <CountdownTimer />
          </Flex>

          <Box
            display={{ base: 'none', lg: 'block' }}
            ml={{ base: '0px', md: '80px' }}
          >
            {importantDatesSection}
          </Box>
        </Flex>
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{
            width: '100vw',
            height: '100vh',
            paddingLeft: '80px',
            paddingRight: '80px',
            backgroundImage: `url(${LinesEffect.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Box display={{ base: 'block', lg: 'none' }}>
            {importantDatesSection}
          </Box>
        </Box>
      </Box>
      <LeaderBoard />
    </Box>
  );
}
