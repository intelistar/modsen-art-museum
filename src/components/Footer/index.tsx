import logo from '@assets/museum-logo2.png'
import modsenLogo from '@assets/modsen-logo.png'
import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <section className={styles.logo}>
        <img src={logo} alt="museum logo" />
      </section>
      <section className={styles.logo}>
        <img src={modsenLogo} alt="modsen logo" />
      </section>
    </div>
  </footer>
)

export default Footer
