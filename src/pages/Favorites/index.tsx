import styles from './styles.module.scss'
import useFavorites from '@hooks/useFavorites'
import useArtworksByIds from '@hooks/useArtworksByIds'
import ArtworkItem from '@components/ArtworkItem'

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()

  const { artworks, loading } = useArtworksByIds(favorites)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Here Are Your <span>Favorites</span>
      </h1>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Saved by you</h2>
        <h1 className={styles.header_title}>Your favorites list</h1>
      </div>
      {(!favorites.length && (
        <div className={styles.message}>No Favorites</div>
      )) ||
        (loading ? (
          <div className={styles.message}>Loading...</div>
        ) : (
          <div className={styles.grid}>
            {artworks.map((artwork) => (
              <ArtworkItem
                key={artwork.id}
                artwork={artwork}
                isFavorite={favorites.includes(artwork.id)}
                toggleFavorite={() => toggleFavorite(artwork.id)}
              />
            ))}
          </div>
        ))}
    </div>
  )
}
