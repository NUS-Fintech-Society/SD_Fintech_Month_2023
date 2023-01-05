import {
  Button,
  chakra,
  Image,
  Flex,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export const ModalButton = chakra(Button, {
  baseStyle: {
    height: { base: '5rem', md: '6.5rem' },
    width: { base: '5rem', md: '6.5rem' },
    zIndex: '999',
    bottom: '20px',
    right: '20px',
    position: 'fixed',
    borderRadius: '50%',
    boxShadow: '1px 1px #888888, 1px -1px #888888, -1px 1px #888888',
    fontSize: { base: '2xs', md: 'xs' },
  },
});

export const ModalLogo = chakra(Image, {
  baseStyle: {
    height: '60%',
    width: '100%',
    zIndex: '1000',
  },
});

export const HeaderImage = chakra(Image, {
  baseStyle: {
    height: '2rem',
    px: '0.5rem',
  },
});

export const LeaderBoardModal = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    w: '100%',
    backgroundColor: '#E6E6FA',
    borderRadius: '25px',
    paddingBottom: '2.5%',
    marginBottom: '3%',
  },
});

export const Header = chakra(Flex, {
  baseStyle: {
    w: '100%',
    minH: '2.2rem',
    alignContent: 'center',
    color: '#001158',
    fontWeight: 'bold',
  },
});

export const ModalDetailLabel = chakra(Flex, {
  baseStyle: {
    px: '2rem',
    fontSize: 'lg',
    fontWeight: 'bold',
    py: '2%',
  },
});

export const Row = chakra(Flex, {
  baseStyle: {
    w: '100%',
    py: '1%',
    minH: '2.2rem',
    // justifyContent: 'space-evenly',
    alignContent: 'center',
    color: '#001158',
  },
});

export const MemberDetail = chakra(Flex, {
  baseStyle: {
    w: '25%',
    alignContent: 'center',
    px: '9%',
  },
});

export const BodyContent = chakra(ModalBody, {
  baseStyle: {
    width: '90%',
    alignSelf: 'center',
    py: '3%',
  },
});

export const HeaderContent = chakra(Flex, {
  baseStyle: {
    alignContent: 'center',
    justifyContent: 'left',
    px: { base: '1.54rem', md: '4rem' },
  },
});

export const CustomModalFooter = chakra(ModalFooter, {
  baseStyle: {
    py: '2%',
    justifyContent: 'center',
  },
});

export const QuizStatus = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    padding: '2rem',
    px: { base: '5rem', md: '2rem' },
    fontWeight: 'bold',
    fontSize: { base: 'sm', md: 'md' },
  },
});

export const QuizButton = chakra(Button, {
  baseStyle: {
    marginLeft: '5%',
    px: { base: '6%', md: '2%' },
    backgroundColor: '#001158',
    color: 'white',
    fontSize: { base: 'sm', md: 'md' },
  },
});
