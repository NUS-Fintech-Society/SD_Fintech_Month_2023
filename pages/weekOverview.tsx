import { useBreakpointValue } from '@chakra-ui/react';
import WeekOverview from '../components/WeekOverview';

export default function Workshop() {
    const isDesktop = useBreakpointValue({ base: false, md: true });
    return WeekOverview();
}