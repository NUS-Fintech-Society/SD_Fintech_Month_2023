import {
  Flex,
  Image,
  Text,
  Button,
  chakra,
  AccordionButton,
  Accordion,
} from '@chakra-ui/react';

export const WeekOverviewContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '100%',
    minH: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    py: { base: '15%', md: '5%' },
    // backgroundImage: `url("/Background/weekoverview-background.png")`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // bgRepeat: 'repeat',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    h: '15%',
    align: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
    fontSize: { base: '2xl', md: '4xl' },
    fontWeight: 'bold',
  },
});

export const ButtonPanel = chakra(Flex, {
  baseStyle: {
    w: '100%',
    minH: '20%',
    px: '25%',
    py: '3%',
    justifyContent: 'center',
  },
});

export const WeekButton = chakra(Button, {
  baseStyle: {
    width: { base: '4rem', md: '8rem' },
    minWidth: { base: '0', md: '120px' },
    display: 'flex',
    flexDirection: 'column',
    py: { base: '1.5rem', md: '2rem' },
    justifyContent: 'center',
    borderRadius: { base: 'full', md: '20px' },
    backgroundColor: '#dbd5eb',
    fontWeight: 'normal',
    fontSize: 'sm',
    mx: '2%',
    _hover: {
      bg: '#001158',
      color: 'white',
    },
    _focus: {
      bg: '#001158',
      color: 'white',
    },
  },
});

export const SingleWeekContainer = chakra(Flex, {
  baseStyle: {
    w: '100%',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    px: { base: '7.5%', md: '15%' },
  },
});

export const WeekHeader = chakra(Flex, {
  baseStyle: {
    alignContent: 'center',
    color: '#001158',
    fontSize: { base: 'xl', md: '2xl' },
    fontWeight: 'bold',
  },
});

export const Event = chakra(Flex, {
  baseStyle: {
    flexDirection: { base: 'column', md: 'row' },
    justifyContent: 'space-apart',
    backgroundColor: 'white',
    minH: { base: '0', md: '12rem' },
    py: '3%',
    px: '2%',
    w: '100%',
    border: '1px solid',
    borderColor: 'grey',
    borderRadius: '10px',
    my: '20px',
  },
});

//reusable
export const BoldText = chakra(Flex, {
  baseStyle: {
    color: '#001158',
    fontWeight: 'bold',
    // paddingRight : '2%',
    fontSize: { base: 'sm', md: 'md' },
  },
});

export const NormalText = chakra(Flex, {
  baseStyle: {
    color: '#001158',
    fontSize: 'sm',
  },
});

export const EventLabel = chakra(Flex, {
  baseStyle: {
    backgroundColor: '#001158',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    py: { base: '10%', md: '1.5%' },
    fontWeight: 'bold',
    borderRadius: '5px',
    fontSize: { base: 'xs', md: 'sm' },
  },
});

export const LocationTag = chakra(Flex, {
  baseStyle: {
    backgroundColor: '#001158',
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    width: { base: '50%', md: '60%' },
    fontWeight: 'bold',
    py: '3%',
    marginTop: { base: '5%', md: '0' },
    px: '5%',
    borderRadius: '5px',
    fontSize: { base: 'xs', md: 'sm' },
  },
});

//date and time block
export const DateAndLocation = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    w: { base: '50%', xl: '20%' },
    alignItems: 'center',
    alignContent: 'center',
  },
});

export const DateAndTime = chakra(Flex, {
  baseStyle: {
    w: '100%',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: { base: '0', md: '10px' },
    justifyContent: 'center',
    px: { base: '0', md: '5%' },
  },
});

export const Time = chakra(Flex, {
  baseStyle: {
    color: '#001158',
    fontSize: { base: 'xs', md: 'sm' },
    px: '3%',
  },
});

export const EventTitle = chakra(Flex, {
  baseStyle: {
    color: '#001158',
    fontSize: { base: 'sm', md: 'xl' },
    paddingBottom: '15px',
    fontWeight: 'bold',
  },
});

//descriptionBox
export const NonWorkshopBox = chakra(Flex, {
  baseStyle: {
    width: { base: '50%', md: '75%' },
    paddingBottom: '2%',
    flexDirection: 'column',
    px: '7.5%',
    justifyContent: 'space-between',
  },
});

export const WorkshopBox = chakra(Flex, {
  baseStyle: {
    width: { base: '50%', md: '75%' },
    flexDirection: { base: 'column', md: 'column' },
    px: '7.5%',
    justifyContent: 'space-between',
    alignItems: { base: 'center', md: 'start' },
  },
});

//Workshop Speaker
export const SpeakerContainer = chakra(Flex, {
  baseStyle: {
    maxHeight: '50%',
    minWidth: '50%',
    paddingTop: '20px',
    alignItems: 'center',
    // justifyContent : 'center',
  },
});

export const SpeakerDetails = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    h: '100%',
    px: '3%',
  },
});

export const SpeakerImage = chakra(Image, {
  baseStyle: {
    borderRadius: 'full',
    w: '7rem',
    h: '7rem',
  },
});

export const SpeakerLabel = chakra(Text, {
  baseStyle: {
    fontSize: 'sm',
    color: '#001158',
    py: { base: '1%', md: '0%' },
  },
});

export const AllSpeakers = chakra(Flex, {
  baseStyle: {
    w: '100%',
    overflow: 'none',
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',
  },
});

export const WorkshopAccordion = chakra(Accordion, {
  baseStyle: {
    marginTop: '2rem',
    borderColor: 'white',
  },
});

export const ExpandWorkshopButton = chakra(AccordionButton, {
  baseStyle: {
    width: '2rem',
    height: '2rem',
    py: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'full',
    backgroundColor: '#dbd5eb',
    color: '#001158',
    _hover: {
      backgroundColor: '#001158',
      color: 'white',
    },
  },
});
