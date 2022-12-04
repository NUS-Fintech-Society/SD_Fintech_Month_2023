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

export const MainBox = chakra(Flex, {
  baseStyle: {
    width: ['320px', '380px', '380px'], //["lg", "lg", "5xl"]
    height: ['470px', '550px', '500px'],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '52',
    boxShadow: '5px 4px 10px 3px rgba(0, 0, 0, 0.25)',
    padding: '5',
    mb: ['8', '8', '8'],
    ml: ['0', '0', '0'],
    mr: ['0', '0', '0'],
    align: 'center',
  },
});

export const MentorName = chakra(Text, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: ['2xl', '2xl', '3xl'], //["lg", "lg", "5xl"] for responsive
    color: '#001158',
    padding: '1',
  },
});

export const MentorImage = chakra(Image, {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    pl: '1',
    pt: '0',
    // boxSize: "250",
    width: '350px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    mb: '5',
  },
});

export const EmailLink = chakra(Link, {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'lg', //["2xs", "2xs", "lg"] for responsive
    color: '#3F51B5',
    textDecoration: 'underline',
    pl: '1',
    pt: '0',
    href: '#',
  },
});

export const InputAndButtonBox = chakra(Box, {
  baseStyle: {
    width: 'auto', //["full", "auto", "auto"] for responsiveness
  },
});

export const DetailsFlex = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    mb: '8', //["2", "8"] for responsiveness
  },
});

export const DetailsText = chakra(Text, {
  baseStyle: {
    fontWeight: 'light',
    fontSize: ['md', 'md', 'lg'],
    color: '#001158',
    padding: ['1', '2', '2'],
  },
});

export const DetailsBox = chakra(Box, {
  baseStyle: {
    pl: '5',
    pr: '5',
    background: '#DFE1F9',
    border: '1px solid #B9C3FF',
    borderRadius: '10px',
  },
});

export const TitleText = chakra(Text, {
  baseStyle: {
    color: '#001158',
    textAlign: 'center',
    align: 'center',
    fontSize: 'lg',
    // fontWeight: "bold",
    mb: '5',
  },
});

export const OrgText = chakra(Text, {
  baseStyle: {
    color: '#001158',
    align: 'center',
    fontSize: 'lg',
    fontWeight: 'bold',
    mb: '5',
  },
});

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
