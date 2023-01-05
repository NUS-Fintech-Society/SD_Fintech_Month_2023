import { Flex, Text, chakra } from '@chakra-ui/react';

export const Title = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: { base: '3xl', sm: '3xl', lg: '4xl' },
    color: 'brand.primary',
    textAlign: 'center',
  },
});

export const WIPContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: 'calc(100vh - 60px)',
    justifyContent: 'center',
    alignItems: 'center',
    pl: '20px',
    pr: '20px',
    // bgImage: "url('/Background/workshop-background.png')",
    // bgSize: 'cover',
    // bgPosition: 'center',
  },
});
