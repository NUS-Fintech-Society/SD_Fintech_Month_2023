import { Box, chakra, Tab } from '@chakra-ui/react';
import SecondaryBackground from '../../public/SecondaryBackground.png';
import styled from 'styled-components';
import { Collapse }  from 'antd'
import { defaultColors } from '../../themes/default';

const { Panel } = Collapse

export const FaqWrapper = chakra(Box, {
  baseStyle: {
    width: '100vw',
    minHeight: { base: 'calc(100vh - 130px)', md: 'calc(100vh - 160px)' },
    justifyContent: 'center',
    //bgImage: `url(${SecondaryBackground.src})`,
    bgSize: 'cover',
    bgPosition: 'center',
  },
});

export const Header = chakra(Box, {
  baseStyle: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '30px',
    justifyContent: 'center',
    paddingTop: { base: '0px', md: '50px' },
    paddingBottom: { base: '5px', md: '70px' },
  },
});

export const ContentWrapper = chakra(Box, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Content = chakra(Box, {
  baseStyle: {
    w: '1000px',
  },
});

export const StyledTab = chakra(Tab, {
  baseStyle: {
    fontSize: { base: '15px', md: '20px' },
    pr: { base: '20px', md: '50px' },
  },
});

export const StyledPanel = styled(Panel)`

  background-color: white !important;
  color: white !important;
  border-bottom: 0px !important;

  .ant-collapse-header {
    font-weight: bold;
    font-size: 18px;
    color: ${defaultColors.primary1.hexCode} !important;
    background-color: white !important;
    margin: 0px !important;
  }

  .ant-collapse-content {
    background-color: white !important;
    font-size: 16px;
  }
`
