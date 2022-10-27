import { chakra } from "@chakra-ui/react";

export const Timer = chakra("div", {
  baseStyle: {
    display: "inline-block",
    boxShadow: "md",
    mx: 8,
    bgColor: "white",
    borderRadius: "90px",
    zIndex: 1,
    padding: "5rem",
  },
});

export const TimerInner = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    zIndex: 2,
    justifyContent: "center",
  },
});

export const TimerText = chakra("span", {
  baseStyle: {
    fontSize: "6rem",
    color: "#142778",
  },
});

export const TimerDivider = chakra("span", {
  baseStyle: {
    fontSize: "6rem",
    color: "#142778",
    px: "2rem",
  },
});

export const TimerSegment = chakra("div", {
  baseStyle: {
    color: "#142778",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    textAlign: "center",
    fontWeight: 500,
  },
});

export const Label = chakra("span", {
  baseStyle: {
    mt: "1rem",
    fontSize: "2.2rem",
  },
});
