import { createContext } from 'react';

const DeviceProvider = createContext<{ isDesktop: boolean }>({
  isDesktop: false,
});

export { DeviceProvider };
