import { Box, chakra, Button } from '@chakra-ui/react';

export const Title = chakra(Box, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: '5xl',
    color: 'brand.primary',
    textAlign: 'center',
  },
});

export const ThemeButton = chakra(Button, {
  baseStyle: {
    // width: '200px',
    height: '50px',
    borderRadius: '20px',
  },
});

export const WorkshopButton = chakra(Button, {
  baseStyle: {
    width: '140px',
    height: '40px',
    borderRadius: '12px',
  },
});
