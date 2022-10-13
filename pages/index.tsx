import type { NextPage } from 'next'
import ImportantDates from '../components/ImportantDates'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <div style={{ paddingTop: "100px" }}>
        <ImportantDates />
      </div>
    </div>
  )
}

export default Home
