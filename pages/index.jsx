import Head from "next/head";
import Image from "next/image";

import CheckIcon from "../public/images/icon-check.svg";
import { useState, useEffect } from "react";

import {
  Box,
  Center,
  Text,
  Container,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  List,
  ListItem,
  ListIcon,
  Button,
  Divider,
} from "@chakra-ui/react";

const Home = () => {
  const [slider, setSlider] = useState(0);
  const [views, setViews] = useState("");
  const [prize, setPrize] = useState(0.0);
  const [disc, setDisc] = useState(false);

  useEffect(() => {
    if (slider < 1000) {
      setViews(slider);
    } else if (slider >= 1000 && slider < 1000000) {
      setViews(`
        ${Math.ceil(slider / 1000)}k
      `);
    } else if (slider >= 1000000) {
      setViews(`
        ${slider / 1000000}m
      `);
    }

    setPrize(
      `$${
        disc
          ? Number(
              (slider / 1000000) * 36 - (slider / 1000000) * 36 * (25 / 100)
            ).toFixed(2)
          : Number((slider / 1000000) * 36).toFixed(2)
      }`
    );
  }, [disc, slider]);

  return (
    <Center
      backgroundImage="url('images/bg-pattern.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="top left"
      backgroundSize={{ xl: "contain" }}
      padding="8"
      width="100vw"
      height="100vh"
      backgroundColor="white"
    >
      <Center top="5vh" position="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
          <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
            <circle cx="63" cy="82" r="62.5" />
            <circle cx="105" cy="41" r="40.5" />
          </g>
        </svg>
      </Center>
      <Box zIndex="30">
        <Text
          textAlign="center"
          fontSize={{ base: "xl", lg: "xx-large" }}
          fontWeight="extrabold"
        >
          Simple, traffic-based pricing
        </Text>
        <Text
          marginTop="4"
          textAlign="center"
          color="hsl(225, 20%, 60%)"
          fontSize={{ base: "xs", lg: "sm" }}
        >
          Sign-up for our 30-day trial.
          <br /> No credit card required.
        </Text>
        <Container
          marginTop="10"
          backgroundColor="white"
          boxShadow="xl"
          borderRadius="lg"
          width={{ base: "100%", md: "container.md", lg: "container.lg" }}
        >
          <Box padding="5">
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ base: "center", lg: "space-between" }}
            >
              <Text
                marginTop="4"
                textTransform="uppercase"
                textAlign="center"
                fontWeight="black"
                color="hsl(225, 20%, 60%)"
                fontSize={{ base: "xs", lg: "lg" }}
              >
                {views} Pageviews
              </Text>
              <Box
                display={{ base: "none", lg: "flex" }}
                marginTop="8"
                justifyContent="center"
              >
                <Text fontSize="xxx-large" fontWeight="black">
                  {prize}
                </Text>
                <Text
                  fontSize="lg"
                  marginLeft="2"
                  marginTop="5"
                  color="hsl(225, 20%, 60%)"
                >
                  /month
                </Text>
              </Box>
            </Box>

            <Slider
              max={1000000}
              min={0}
              onChange={(num) => setSlider(num)}
              aria-label="slider-ex-4"
              marginTop="8"
              defaultValue={30}
            >
              <SliderTrack height="2" borderRadius="full">
                <SliderFilledTrack bg="hsl(174, 77%, 80%)" />
              </SliderTrack>
              <SliderThumb
                backgroundColor="hsl(174, 86%, 45%)"
                boxSize={9}
                boxShadow="0px 10px 20px hsl(174, 86%, 45%, 0.5)"
                _focus={{ boxShadow: "0px 10px 20px hsl(174, 86%, 45%, 0.5)" }}
                _hover={{ boxShadow: "0px 12px 30px hsl(174, 86%, 45%, 0.8)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13">
                  <g fill="#80FFF3" fillRule="evenodd">
                    <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
                  </g>
                </svg>
              </SliderThumb>
            </Slider>
            <Box
              display={{ base: "flex", lg: "none" }}
              marginTop="8"
              justifyContent="center"
            >
              <Text fontSize="xx-large" fontWeight="black">
                {prize}
              </Text>
              <Text
                fontSize="md"
                marginLeft="2"
                marginTop="3"
                color="hsl(225, 20%, 60%)"
              >
                /month
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop="8"
              gridGap="2"
            >
              <Text fontSize="x-small" color="hsl(225, 20%, 60%)">
                Monthly Billing
              </Text>
              <Switch onChange={() => setDisc(!disc)} colorScheme="cyan" />
              <Text fontSize="x-small" color="hsl(225, 20%, 60%)">
                Yearly Billing
              </Text>
            </Box>
          </Box>
          <Divider marginY="2" />
          <Box
            padding="5"
            display="flex"
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <List color="hsl(225, 20%, 60%)" spacing={3}>
              <ListItem
                textAlign={{ base: "center", lg: "left" }}
                fontSize="xs"
              >
                <ListIcon as={CheckIcon} />
                Unlimited websites
              </ListItem>
              <ListItem
                textAlign={{ base: "center", lg: "left" }}
                fontSize="xs"
              >
                <ListIcon as={CheckIcon} />
                100% data ownership
              </ListItem>
              <ListItem
                textAlign={{ base: "center", lg: "left" }}
                fontSize="xs"
              >
                <ListIcon as={CheckIcon} />
                Email reports
              </ListItem>
            </List>
            <Button
              marginTop="8"
              color="hsl(225, 20%, 60%)"
              _hover={{ bgColor: "hsl(227, 35%, 25%)", color: "white" }}
              _active={{ bgColor: "hsl(226, 100%, 87%)" }}
              bgColor="hsl(227, 35%, 25%)"
              borderRadius="3xl"
              fontSize="sm"
              paddingX={{ lg: "10" }}
            >
              Start my trial
            </Button>
          </Box>
        </Container>
      </Box>
    </Center>
  );
};

export default Home;
