import { Box, chakra, Button } from '@chakra-ui/react';
import WaterEffect from '../../../public/WaterEffect.png';

export const HeroStyles = chakra(Box, {
  backgroundImage: `url(${WaterEffect.src})`,
  width: '100vw',
  alignItems: 'center',
  backgroundSize: 'cover',
  position: 'absolute',
  zIndex: -1,
});

export const LeftSection = chakra(Box, {
  zIndex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  paddingLeft: '80px',
  paddingRight: '80px',
});

export const Title = chakra(Box, {
  baseStyle: {
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '5xl',
    color: 'brand.primary',
    textAlign: 'center',
  },
});

export const ThemeButton = chakra(Button, {
  baseStyle: {
    width: '200px',
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
