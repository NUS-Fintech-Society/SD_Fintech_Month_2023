import { Box, chakra } from '@chakra-ui/react';

export const FooterContainer = chakra(Box, {
  baseStyle: {
    paddingX: '30px',
    paddingY: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '60px',
    background: 'brand.primary',
    alignContent: 'center',
    color: 'white',
  },
});
export const FooterLeftContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    width: '70%',
    height: '100%',
    gap: '4px',
  },
});

// export the style <span style={{marginLeft: "5px", marginRight: "5px"}}>|</span>
export const VerticalLine = chakra(Box, {
  baseStyle: {
    // marginLeft: '20px',
    // marginRight: '20px',

    height: '25px',
  },
});
