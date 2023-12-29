import { useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Routes } from '../../constants/Routes.enum';
import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';
import { DeviceProvider } from '../../constants/context';

export default function NavigationBar() {
  const { isDesktop } = useContext(DeviceProvider);
  const router = useRouter();

  function navigate(path: Routes) {
    return () => {
      router.push(path);
    };
  }

  const handleHackathonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScrGvQgY0tgpHwXndRT1oq3iZtZwQPzd5kuPedF4RlROPFCgA/viewform',
    );
  };

  return isDesktop ? (
    <DesktopNavigationBar
      navigate={navigate}
      hackathon={handleHackathonClick}
    />
  ) : (
    <MobileNavigationBar navigate={navigate} hackathon={handleHackathonClick} />
  );
}
