import { Box, Flex } from '@chakra-ui/react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ImportantDates from '../ImportantDates';
import { ThemeButton, Title, WorkshopButton} from './styles';
export default function IndexMain() {

  const importantDatesSection = (
    <Flex direction="column" alignItems="center">
      <ImportantDates />
      <Flex px="5" justifyContent="space-between" mt="40px">
        <WorkshopButton
          colorScheme="brand"
          fontWeight="light"
          fontSize="lg"
          mr="30px"
        >
          Hackathon
        </WorkshopButton>
        <WorkshopButton
          colorScheme="brand"
          fontWeight="light"
          fontSize="lg"
          ml="30px"
        >
          Workshops
        </WorkshopButton>
      </Flex>
    </Flex>
  );

  return (
    <Box>
      <Box
        display="flex"
        zIndex={"1"}
        alignItems="center"
        justifyContent="center"
        style={{
          width: '100vw',
          height: '100vh',
          paddingLeft: '80px',
          paddingRight: '80px',
          backgroundImage: `url("/WaterEffect.png")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-around"
          mt="30px"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            mr={{ base: '0px', md: '80px' }}
          >
            <Flex direction="column" alignItems="center">
              <Title>NUS FINTECH MONTH</Title>
              <ThemeButton
                colorScheme="brand"
                fontWeight="light"
                fontSize="2xl"
              >
                2023 Theme
              </ThemeButton>
            </Flex>
            <CountdownTimer />
          </Flex>

          <Box
            display={{ base: 'none', md: 'block' }}
            ml={{ base: '0px', md: '80px' }}
          >
            {importantDatesSection}
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          height: '100vh',
          paddingLeft: '80px',
          paddingRight: '80px',
          backgroundImage: `url("/LinesEffect.png")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Box display={{ base: 'block', md: 'none' }}>
          {importantDatesSection}
        </Box>
      </Box>
    </Box>
  );
}
