import {
  Text,
  Flex,
  Link,
  Box,
  chakra,
  Input,
  Button,
  HStack,
  Image,
} from '@chakra-ui/react';

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: '100%',
    pt: '10%',

    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export const SpeakersFlex = chakra(Flex, {
  baseStyle: {
    width: '100vw',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // alignItems: "center",
  },
});

export const Title = chakra(Flex, {
  baseStyle: {
    mt: ['60px', '0', '0'],
    mb: '20px',
    fontWeight: 'bold',
    fontSize: ['3xl', '3xl', '5xl'],
    color: '#001158',
    textAlign: 'center',
  },
});

// export const SpeakerText = chakra(Text, {
//     baseStyle: {
//         fontWeight: "bold",
//         fontSize: "5xl", //["lg", "lg", "5xl"] for responsive
//         color: "#3F51B5",
//         padding: "1",
//     }
// })

// export const SpeakerImage = chakra(Image, {
//     baseStyle: {
//         fontWeight: "medium",
//         fontSize: "lg", //["2xs", "2xs", "lg"] for responsive
//         pl: "1",
//         pt: "0"
//     }
// })

// export const EmailLink = chakra(Link, {
//     baseStyle: {
//         fontWeight: "normal",
//         fontSize: "lg", //["2xs", "2xs", "lg"] for responsive
//         color: "#3F51B5",
//         textDecoration: "underline",
//         pl: "1",
//         pt: "0",
//         href: "#"
//     }
// })

// export const InputAndButtonBox = chakra(Box, {
//     baseStyle: {
//         width: "auto" //["full", "auto", "auto"] for responsiveness
//     }
// })

// export const DetailsHStack = chakra(HStack, {
//     baseStyle: {
//         mb: "8" //["2", "8"] for responsiveness
//     }
// })

// export const DetailsBox = chakra(Text, {
//     baseStyle: {
//         fontWeight: "light",
//         fontSize: "lg", //["xs", "xs", "lg"] for responsive
//         color: "white",
//         padding: "2" //["0", "0", "2"] for responsive
//     }
// })

// export const DescText = chakra(Text, {

// })

// /* Rectangle 26 */

// box-sizing: border-box;

// position: absolute;
// width: 342.43px;
// height: 484.52px;
// left: 79px;
// top: 220px;

// background: #FFFFFF;
// box-shadow: 5px 4px 10px 3px rgba(0, 0, 0, 0.25);
// border-radius: 52px;

// /* Rectangle 9 */

// box-sizing: border-box;

// position: absolute;
// width: 119.58px;
// height: 34.17px;
// left: 99.96px;
// top: 540.59px;

// background: #DFE1F9;
// border: 1px solid #B9C3FF;
// border-radius: 10px;

// /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non orci nec orci condimentum porttitor. Aenean ultricies purus congue euismod rutrum. Aliquam erat volutpat. */

// position: absolute;
// width: 299.72px;
// height: 97.84px;
// left: 99.96px;
// top: 598.15px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 17px;
// text-align: center;

// color: #000000;
