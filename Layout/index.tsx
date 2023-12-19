import { calc, useBreakpointValue } from '@chakra-ui/react';
import { ReactElement, createContext } from 'react';
import NavigationBar from '../components/NavigationBar';
import { DeviceProvider } from '../constants/context';

export default function Layout({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <DeviceProvider.Provider value={{ isDesktop: isDesktop ?? false }}>
      <NavigationBar />
      <main
        style={{
          position: 'relative',
          width: '100vw',
          marginTop: isDesktop ? '100px' : '70px',
        }}
      >
        {children}
      </main>
    </DeviceProvider.Provider>
  );
}
