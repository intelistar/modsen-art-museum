import PaginatedGallery from '@components/PaginatedGallery'
import styles from './styles.module.scss'
import ArtworkSearchForm from '@components/ArtworkSearchForm'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <ArtworkSearchForm />
      <PaginatedGallery />
    </div>
  )
}
