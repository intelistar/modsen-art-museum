import { Link } from 'react-router-dom'
import logo from '@assets/museum-logo.png'
import homeIcon from '@assets/icons/home.png'
import bookmarkIcon from '@assets/icons/bookmarkLight.png'
import styles from './styles.module.scss'
import { useRef, useState } from 'react'
import useOutsideClick from '@hooks/useOutsideClick'

const NavigationItem = ({
  icon,
  label,
  path,
  onClick,
}: {
  icon: string
  label: string
  path: string
  onClick: () => void
}) => (
  <Link to={path} onClick={onClick} className={styles.navigation_item}>
    <img src={icon} className={styles.icon} alt={`${label} icon`} />
    <p>{label}</p>
  </Link>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useOutsideClick(menuRef, () => setIsMenuOpen(false))

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <section className={styles.logo}>
          <img src={logo} alt="museum logo" />
        </section>
        <section className={styles.menu} ref={menuRef}>
          <div
            className={`${styles.burger} ${isMenuOpen ? styles.burger_open : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div />
            <div />
            <div />
          </div>
          <nav
            className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}
          >
            <NavigationItem
              icon={homeIcon}
              label="Home"
              path="/"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavigationItem
              onClick={() => setIsMenuOpen(false)}
              icon={bookmarkIcon}
              label="Your favorites"
              path="/favorites"
            />
          </nav>
        </section>
      </div>
    </header>
  )
}
export default Header
