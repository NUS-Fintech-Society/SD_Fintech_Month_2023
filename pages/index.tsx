import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { url } from "inspector";
import type { NextPage } from "next";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import ImportantDates from "../components/ImportantDates";
import styles from "../styles/Home.module.css";
import { ThemeButton, Title, WorkshopButton } from "./styles";

const Home: NextPage = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        paddingTop: "100px",
        paddingLeft: "80px",
        paddingRight: "80px",
        backgroundImage: `url("/WaterEffect.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Flex justifyContent="space-around" mt="30px">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex direction="column" alignItems="center">
            <Title>NUS FINTECH MONTH</Title>
            <ThemeButton colorScheme="brand" fontWeight="light" fontSize="2xl">
              2023 Theme
            </ThemeButton>
          </Flex>

          <CountdownTimer />
        </Flex>
        <Flex direction="column" justifyContent="space-between">
          <ImportantDates />
          <Flex px="5" justifyContent="space-between" mt="40px">
            <WorkshopButton
              colorScheme="brand"
              fontWeight="light"
              fontSize="lg"
            >
              Hackathon
            </WorkshopButton>
            <WorkshopButton
              colorScheme="brand"
              fontWeight="light"
              fontSize="lg"
            >
              Workshops
            </WorkshopButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
