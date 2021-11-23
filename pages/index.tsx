import Head from 'next/head'
import styles from './index.module.css'
import Counter from '../components/Counter'

const Home = () => (
  <div className={styles.container}>
    <h3 data-testid="header">Counter</h3>
    <Counter />

  </div>
)

export default Home
