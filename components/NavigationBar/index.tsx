import { useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Routes } from '../../constants/Routes.enum';
import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';

export default function NavigationBar() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const router = useRouter();

  function navigate(path: Routes) {
    return () => {
      router.push(path);
    };
  }

  const handleHackathonClick = () => {
    window.open('https://forms.gle/woaewfoX4pW9nJMZA')
  };

  return isDesktop ? (
    <DesktopNavigationBar navigate={navigate} hackathon={handleHackathonClick} />
  ) : (
    <MobileNavigationBar navigate={navigate} hackathon={handleHackathonClick}/>
  );
}
