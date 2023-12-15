import { Box, chakra, Button } from '@chakra-ui/react';

export const Title = chakra(Box, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: '5xl',
    color: 'white',
    textShadow: '0px 2px 3px #67C3C6',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0px',
  },
});

export const SubTitle = chakra(Box, {
  baseStyle: {
    fontSize: '3xl',
    color: 'white',
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
