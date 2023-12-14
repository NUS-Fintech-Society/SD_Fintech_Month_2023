import { Box, chakra } from '@chakra-ui/react';

export const FooterContainer = chakra(Box, {
  baseStyle: {
    paddingLeft: '30px',
    paddingRight: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '60px',
    background: 'brand.primary',
    alignContent: 'center',
    color: 'white',
  },
});
export const FooterLeftContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

// export the style <span style={{marginLeft: "5px", marginRight: "5px"}}>|</span>
export const VerticalLine = chakra(Box, {
  baseStyle: {
    marginLeft: '10px',
    marginRight: '10px',
  },
});
