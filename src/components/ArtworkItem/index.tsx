import { FC } from 'react'
import { Artwork } from '../../models/Artwork'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  artwork: Artwork
}

const ArtworkItem: FC<Props> = ({ artwork }) => {
  const { id, title, artist, isOnView, imageUrl } = artwork
  const navigate = useNavigate()

  const handleArtworkClick = () => {
    navigate(`/artworks/${id}`)
  }

  return (
    <article className={styles.container} onClick={handleArtworkClick}>
      <section className={styles.image_section}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </section>
      <section className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.artist}>{artist || 'Unknown'}</p>
        <p className={styles.isOnView}>{isOnView ? 'Public' : 'Private'}</p>
      </section>
    </article>
  )
}

export default ArtworkItem
