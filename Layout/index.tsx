import { useBreakpointValue } from '@chakra-ui/react';
import { ReactElement, createContext } from 'react';
import NavigationBar from '../components/NavigationBar';
import { DeviceProvider } from '../constants/context';

export default function Layout({ children }: { children: ReactElement[] }) {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <DeviceProvider.Provider value={{ isDesktop: isDesktop ?? false }}>
      <NavigationBar />
      <main
        className={`absolute w-screen ${
          isDesktop ? 'mt-[100px]' : 'mt-[70px]'
        }`}
      >
        {children}
      </main>
    </DeviceProvider.Provider>
  );
}
