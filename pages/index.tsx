import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import ImportantDates from "../components/ImportantDates";
import { ThemeButton, Title, WorkshopButton } from "./styles";

const Home: NextPage = () => {
  const importantDatesSection = (
    <Flex direction="column" alignItems="center">
      <ImportantDates />
      <Flex px="5" justifyContent="space-between" mt="40px">
        <WorkshopButton
          colorScheme="brand"
          fontWeight="light"
          fontSize="lg"
          mr="30px"
        >
          Hackathon
        </WorkshopButton>
        <WorkshopButton
          colorScheme="brand"
          fontWeight="light"
          fontSize="lg"
          ml="30px"
        >
          Workshops
        </WorkshopButton>
      </Flex>
    </Flex>
  );

  return (
    <Box>
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
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          mt="30px"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex direction="column" alignItems="center">
              <Title>NUS FINTECH MONTH</Title>
              <ThemeButton
                colorScheme="brand"
                fontWeight="light"
                fontSize="2xl"
              >
                2023 Theme
              </ThemeButton>
            </Flex>
            <CountdownTimer />
          </Flex>

          <Box display={{ base: "none", md: "block" }}>
            {importantDatesSection}
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          height: "100vh",
          paddingLeft: "80px",
          paddingRight: "80px",
          backgroundImage: `url("/LinesEffect.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box display={{ base: "block", md: "none" }} top="50%" left={"50%"}>
          {importantDatesSection}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
