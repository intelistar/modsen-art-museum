import { FC } from 'react'
import { Artwork } from '../../models/Artwork'
import { useNavigate } from 'react-router-dom'
import favoriteIcon from '@assets/icons/bookmark.png'
import favoriteIconFill from '@assets/icons/bookmarkFill.png'
import styles from './styles.module.scss'

interface Props {
  artwork: Artwork
  isFavorite: boolean
  toggleFavorite: () => void
}

const ArtworkItem: FC<Props> = ({ artwork, isFavorite, toggleFavorite }) => {
  const { id, title, artist, isOnView, imageUrl } = artwork
  const navigate = useNavigate()

  const handleArtworkClick = () => {
    navigate(`/artworks/${id}`)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavorite()
  }

  return (
    <article className={styles.container} onClick={handleArtworkClick}>
      <section className={styles.image_section}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </section>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.artist}>{artist || 'Unknown'}</p>
        <p className={styles.isOnView}>{isOnView ? 'Public' : 'Private'}</p>
      </div>
      <img
        className={styles.favorite}
        onClick={handleFavoriteClick}
        src={isFavorite ? favoriteIconFill : favoriteIcon}
      />
    </article>
  )
}

export default ArtworkItem
