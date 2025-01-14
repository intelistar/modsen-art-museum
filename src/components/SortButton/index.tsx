import { SORT_ORDER } from '@constants/sorts'
import styles from './styles.module.scss'

const SortButton = ({
  sortKey,
  currentSortOrder,
  onChangeSortOrder,
}: {
  sortKey: SORT_ORDER
  currentSortOrder: SORT_ORDER | ''
  onChangeSortOrder: (sortKey: SORT_ORDER) => void
}) => (
  <div
    onClick={() => onChangeSortOrder(sortKey)}
    className={
      currentSortOrder === sortKey
        ? `${styles.wrapper} ${styles.current}`
        : styles.wrapper
    }
  >
    {sortKey}
  </div>
)

export default SortButton
