import type { NextPage } from 'next';
import Progress from '../components/Progress';

const ProgressPage: NextPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Progress />
    </div>
  );
};

export default ProgressPage;