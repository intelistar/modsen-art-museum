import { FC } from 'react'
import { Pagination as PaginationInfo } from '@models/Pagination'
import { generatePageNums } from '@utils/generatePageNums'
import styles from './styles.module.scss'

interface Props {
  paginationInfo: PaginationInfo | null
  onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({ paginationInfo, onPageChange }) => {
  if (!paginationInfo) return null

  const { currentPage, totalPages } = paginationInfo

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
  const handlePageClick = (page: number) => {
    if (currentPage !== page) onPageChange(page)
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={styles.button}
      >
        {'<'}
      </button>
      {generatePageNums(currentPage, totalPages).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={
            page === currentPage
              ? `${styles.button} ${styles.current}`
              : styles.button
          }
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
