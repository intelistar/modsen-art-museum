import { Link } from 'react-router-dom'
import logo from '@assets/museum-logo.png'
import homeIcon from '@assets/icons/home.png'
import bookmarkIcon from '@assets/icons/bookmarkLight.png'
import styles from './styles.module.scss'

const NavigationItem = ({
  icon,
  label,
  path,
}: {
  icon: string
  label: string
  path: string
}) => (
  <Link to={path} className={styles.navigation_item}>
    <img src={icon} className={styles.icon} alt={`${label} icon`} />
    <p>{label}</p>
  </Link>
)

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <section className={styles.logo}>
        <img src={logo} alt="museum logo" />
      </section>
      <nav className={styles.navigation} aria-label="Main navigation">
        <NavigationItem icon={homeIcon} label="Home" path="/" />
        <NavigationItem
          icon={bookmarkIcon}
          label="Your favorites"
          path="/favorites"
        />
      </nav>
    </div>
  </header>
)

export default Header
