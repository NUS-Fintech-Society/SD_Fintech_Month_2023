import { Box, chakra } from "@chakra-ui/react";

export const FooterContainer = chakra(Box, {
  baseStyle: {
    display: "flex",
    width: "100%",
    height: "60px",
    background: "brand.primary",
    alignContent: "center",
    justifyContent: "flex-end",
    paddingRight: "10",
  },
});
