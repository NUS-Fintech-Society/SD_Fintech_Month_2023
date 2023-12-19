import { Box, chakra, HStack } from '@chakra-ui/react';

import SecondaryBackground from '../../public/SecondaryBackground.png';

export const SponsorWrapper = chakra(Box, {
  baseStyle: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#20345b',
    paddingX: '34px',
  },
});

export const RowContainer = chakra(HStack, {
  baseStyle: {
    h: '75px',
    justifyContent: 'center',
    paddingBottom: '100px',
  },
});

export const HeaderContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '30px',
    justifyContent: 'center',
    paddingBottom: '70px',
    color: 'white',
  },
  sizes: {
    lg: {
      paddingTop: '100px',
      paddingBottom: '100px',
    },
  },
});
