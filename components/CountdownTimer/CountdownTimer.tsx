import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { chakra } from '@chakra-ui/react';
import {
  Label,
  Timer,
  TimerInner,
  TimerSegment,
  TimerText,
  TimerDivider,
} from './styles';

export const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventOpen, setEventOpen] = useState(false);

  useEffect(() => {
    const target = new Date('6 Jan 2023 00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEventOpen(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center shadow-xl bg-[#ffffff80] rounded-[40px] px-8 py-2 lg:px-16 lg:py-4 backdrop-blur-sm">
      <TimerInner>
        <TimerSegment>
          <TimerText>0</TimerText>
          <Label>Days</Label>
        </TimerSegment>

        <TimerDivider>:</TimerDivider>

        <TimerSegment>
          <TimerText>0</TimerText>
          <Label>Hours</Label>
        </TimerSegment>

        <TimerDivider>:</TimerDivider>

        <TimerSegment>
          <TimerText>0</TimerText>
          <Label>Minutes</Label>
        </TimerSegment>

        <TimerDivider>:</TimerDivider>

        <TimerSegment>
          <TimerText>00</TimerText>
          <Label>Seconds</Label>
        </TimerSegment>
      </TimerInner>
    </div>
  );
};

export default CountdownTimer;
