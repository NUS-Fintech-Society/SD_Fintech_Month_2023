import { Box, chakra, HStack } from '@chakra-ui/react';

import SecondaryBackground from '../../public/SecondaryBackground.png';

export const SponsorWrapper = chakra(Box, {
  baseStyle: {
    width: '100vw',
    minHeight: 'calc(100vh - 160px)',
    justifyContent: 'center',
    bgImage: `url(${SecondaryBackground.src})`,
    bgSize: 'cover',
    bgPosition: 'center',
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
    paddingTop: '10px',
    paddingBottom: '70px',
  },
  sizes: {
    lg: {
      paddingTop: '100px',
      paddingBottom: '100px',
    },
  },
});
