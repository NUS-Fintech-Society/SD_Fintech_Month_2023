import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventOpen, setEventOpen] = useState(false);

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");

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
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>
      {eventOpen ? (
        <h1>YAY!</h1>
      ) : (
        <div className={styles.timerInner}>
          <div className={styles.timerSegment}>
            <span className={styles.time}>{days}</span>
            <span className={styles.label}>Days</span>
          </div>

          <span className={styles.divider}>:</span>

          <div className={styles.timerSegment}>
            <span className={styles.time}>{hours}</span>
            <span className={styles.label}>Hours</span>
          </div>

          <span className={styles.divider}>:</span>

          <div className={styles.timerSegment}>
            <span className={styles.time}>{minutes}</span>
            <span className={styles.label}>Minutes</span>
          </div>

          <span className={styles.divider}>:</span>

          <div className={styles.timerSegment}>
            <span className={styles.time}>{seconds}</span>
            <span className={styles.label}>Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
