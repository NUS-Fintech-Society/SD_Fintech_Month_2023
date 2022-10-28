import { Box, chakra, Button } from "@chakra-ui/react";

export const Title = chakra(Box, {
  baseStyle: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "5xl",
    color: "brand.primary",
  },
});

export const ThemeButton = chakra(Button, {
  baseStyle: {
    width: "200px",
    height: "50px",
    borderRadius: "20px",
  },
});

export const WorkshopButton = chakra(Button, {
  baseStyle: {
    width: "140px",
    height: "35px",
    borderRadius: "12px",
  },
});
