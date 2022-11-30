import { Box, chakra } from '@chakra-ui/react';

export const Title = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    fontSize: '5xl',
    color: 'brand.primary',
  },
});

export const ProgressWrapper = chakra(Box, {
  baseStyle: {
    width: '100vw',
    minHeight: 'calc(100vh - 160px)',
    justifyContent: 'center',
    bgImage: "url('/Background/sponsor-background.png')",
    bgSize: 'cover',
    bgPosition: 'center',
  },
});
