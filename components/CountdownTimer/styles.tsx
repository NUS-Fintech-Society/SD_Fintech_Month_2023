import { chakra } from '@chakra-ui/react';

export const Timer = chakra('div', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'xl',
    bgColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(3px)',
    borderRadius: '40px',
    zIndex: 1,
    marginTop: { base: '60px', md: '0px' },
    padding: { base: '3rem', md: '5rem' },
    height: { base: '80px', md: '200px' },
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
    color: '#142778',
  },
});

export const TimerDivider = chakra('span', {
  baseStyle: {
    fontSize: { base: '2rem', md: '4rem' },
    color: '#142778',
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
  },
});
