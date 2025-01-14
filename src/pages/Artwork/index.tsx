import { useParams } from 'react-router-dom'
import useArtwork from '@hooks/useArtwork'
import favoriteIcon from '@assets/icons/bookmark.png'
import favoriteIconFill from '@assets/icons/bookmarkFill.png'
import styles from './styles.module.scss'
import useFavorites from '@hooks/useFavorites'

const Artwork = () => {
  const { id } = useParams()
  const { artwork, loading } = useArtwork(Number(id))

  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(Number(id))
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavorite(Number(id))
  }

  if (loading || !artwork) return <div>Loading...</div>

  const {
    title,
    imageUrl,
    artist,
    isOnView,
    date,
    placeOfOrigin,
    dimensions,
    creditLine,
    galleryTitle,
  } = artwork

  return (
    <div className={styles.wrapper}>
      <section className={styles.image_section}>
        <img src={imageUrl} alt={title} loading="lazy" />
        <img
          className={styles.favorite}
          onClick={handleFavoriteClick}
          src={isFavorite ? favoriteIconFill : favoriteIcon}
        />
      </section>
      <section className={styles.info_section}>
        <section className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.artist}>{artist}</p>
          <p className={styles.date}>{date}</p>
        </section>
        <section className={styles.overview}>
          <h2>Overview</h2>
          <ul className={styles.infoList}>
            <li>
              <span>Artist nacionality:</span> {placeOfOrigin}
            </li>
            <li>
              <span>Dimensions: Sheet:</span> {dimensions}
            </li>
            <li>
              <span>Credit Line:</span> {creditLine}
            </li>
            <li>
              <span>Repository:</span> {galleryTitle}
            </li>
            <li>{isOnView ? 'Public' : 'Private'}</li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Artwork
