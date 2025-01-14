import Footer from '@components/Footer'
import Header from '@components/Header'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
