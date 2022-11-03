import { Button, Input } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import ImportantDates from '../components/ImportantDates';
import styles from '../styles/Home.module.css';
import { writeToSheet } from '../utils/GoogleSheetsUtil';

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>('');

  function setEmailValue(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function submitEmail() {
    const data = { email };

    fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <div className={styles.container}>
      <div style={{ paddingTop: '100px' }}>
        <Input
          placeholder="Basic usage"
          value={email}
          onChange={setEmailValue}
        />
        <Button colorScheme="blue" onClick={submitEmail}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Home;