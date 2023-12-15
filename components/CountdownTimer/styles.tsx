import { chakra } from '@chakra-ui/react';

export const Timer = chakra('div', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'xl',
    bgColor: '#172554',
    backdropFilter: 'blur(3px)',
    borderStyle: 'solid',
    borderRadius: '30px',
    borderColor: '#67C3C6',
    borderWidth: '2px',
    zIndex: 1,
    marginTop: { base: '60px', md: '0px' },
    padding: { base: '3rem', md: '5rem' },
    height: { base: '30px', md: '40px' },
    width: { base: '340px', md: '540px' },
  },
});

export const TimerInner = chakra('div', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 2,
    justifyContent: 'space-between',
  },
});

export const TimerText = chakra('span', {
  baseStyle: {
    fontSize: { base: '2rem', md: '4rem' },
    color: 'white',
  },
});

export const TimerDivider = chakra('span', {
  baseStyle: {
    fontSize: { base: '2rem', md: '4rem' },
    color: '#67C3C6',
    mx: { base: '5px', md: '20px' },
  },
});

export const TimerSegment = chakra('div', {
  baseStyle: {
    color: '#142778',
    display: 'flex',
    gap: '3px',
    flexDirection: 'column',
    textAlign: 'center',
    fontWeight: 'medium',
  },
});

export const Label = chakra('span', {
  baseStyle: {
    fontSize: '1rem',
    color: 'white',
  },
});
