import {
  renderAllDesktopWorkshops,
  renderAllMobileWorkshops,
} from '../components/Workshop';
import { useBreakpointValue } from '@chakra-ui/react';

export default function Workshop() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return isDesktop ? renderAllDesktopWorkshops() : renderAllMobileWorkshops();
}
