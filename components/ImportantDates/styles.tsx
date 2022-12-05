import { Box, chakra, HStack, UnorderedList, Text } from '@chakra-ui/react';

export const Wrapper = chakra(Box, {
  baseStyle: {
    bgColor: 'rgba(255, 255, 255, 0.5)',
    w: {base: '350px', md:'380px'},
    h: '350px',
    p: '20px',
    borderRadius: '2xl',
    backdropFilter: 'blur(3px)',
    borderTopRadius: '0',
    boxShadow: 'xl',
  },
});

export const Title = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    fontSize: '2xl',
    color: 'brand.primary',
  },
});

export const StyledUnorderedList = chakra(UnorderedList, {
  baseStyle: {
    color: '#001158',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

export const ListRow = chakra(HStack, {
  baseStyle: {
    paddingBottom: '10px',
  },
});

export const RowDate = chakra(Text, {
  baseStyle: {
    textDecorationLine: 'underline',
    textDecorationThickness: '1.5px',
    textUnderlineOffset: '3px',
    fontWeight: 'bold',
    color: 'brand.primary',
    borderColor: 'brand.primary',
  },
});

export const RowDesc = chakra(Text, {
  baseStyle: {
    color: 'black',
  },
});
