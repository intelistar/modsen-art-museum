import { useState } from 'react'
import usePaginatedArtworks from '@hooks/usePaginatedArtworks'
import HorizontalArtworkList from '@components/HorizontalArtworkList'
import styles from './styles.module.scss'
import Pagination from '@components/Pagination'

const PaginatedGallery = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { artworks, paginationInfo, loading } = usePaginatedArtworks(
    String(currentPage),
    '5'
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Topics for you</h2>
        <h1 className={styles.title}>Our special gallery</h1>
      </div>
      <div className={styles.list}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <HorizontalArtworkList artworks={artworks} />
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          paginationInfo={paginationInfo}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default PaginatedGallery
