import VerticalArtworkList from '@components/VerticalArtworkList'
import { SORT_ORDER } from '@constants/sorts'
import useDebounce from '@hooks/useDebounce'
import useSearchArtworks from '@hooks/useSearchArtworks'
import { sortArtworks } from '@utils/sorts'
import { useMemo, useState } from 'react'
import styles from './styles.module.scss'
import InputForm from '@components/InputForm'
import SortButton from '@components/SortButton'

const ArtworkSearchForm = () => {
  const [query, setQuery] = useState<string>('')

  const debouncedVQuery = useDebounce(query, 500)
  const { artworks, loading } = useSearchArtworks(debouncedVQuery, '10')

  const [sortOrder, setSortOrder] = useState<SORT_ORDER | ''>('')

  const sortedArtworks = useMemo(() => {
    return sortArtworks(artworks, sortOrder)
  }, [artworks, sortOrder])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Let's Find Some <span>Art</span> Here!
      </h1>

      <InputForm
        value={query}
        onInput={setQuery}
        placeholder="Search Art, Artist, Works..."
      />
      {query.trim() && (
        <div className={styles.results}>
          {loading && <p className={styles.message}>Loading...</p>}

          {!loading && artworks.length === 0 && (
            <p className={styles.message}>No matches found</p>
          )}

          {!loading && artworks.length > 0 && (
            <div>
              <section className={styles.sorts}>
                {Object.values(SORT_ORDER).map((key) => (
                  <SortButton
                    key={key}
                    sortKey={key}
                    currentSortOrder={sortOrder}
                    onChangeSortOrder={(key) =>
                      setSortOrder((prev) => (prev === key ? '' : key))
                    }
                  />
                ))}
              </section>

              <VerticalArtworkList artworks={sortedArtworks} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ArtworkSearchForm
