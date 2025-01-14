import PaginatedGallery from '@components/PaginatedGallery'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <PaginatedGallery />
    </div>
  )
}
