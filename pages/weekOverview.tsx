import { useBreakpointValue } from '@chakra-ui/react';
import {DesktopWeekOverview,MobileWeekOverview} from '../components/WeekOverview';

export default function Workshop() {
    const isDesktop = useBreakpointValue({ base: false, md: true });
    return isDesktop ? DesktopWeekOverview() : MobileWeekOverview();
}