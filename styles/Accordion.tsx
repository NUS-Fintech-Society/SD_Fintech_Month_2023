import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { extendTheme } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// Defining a custom variant called outline
const custom = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    container: {
      border: '2px',
      borderTopColor: 'white',
      borderLeftColor: 'white',
      borderBottomColor: 'white',
      borderRightColor: 'white',
      boxShadow: 'md',
      borderRadius: '10',
      bgColor: 'white',
      /*_hover: {
        border: "2px",
        borderTopColor: "brand.tertiary",
        borderLeftColor: "brand.tertiary",
        borderBottomColor: "brand.tertiary",
        borderRightColor: "brand.tertiary",
        boxShadow: "tertiary",
        borderRadius: "10",
      },
      _expanded: {
      }*/
    },
    button: {
      color: 'brand.primary',
      fontWeight: 'bold',
      fontSize: '18px',
      pt: '20px',
      pb: '20px',
      _hover: {
        bg: 'rgba(0, 0, 0, 0)',
      },
      _expanded: {},
    },
  };
});

const variants = {
  custom,
};

export const accordionTheme = defineMultiStyleConfig({
  variants,
});
