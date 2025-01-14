import { FC } from 'react'
import { Artwork } from '../../models/Artwork'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
  artwork: Artwork
}

const ArtworkCard: FC<Props> = ({ artwork }) => {
  const navigate = useNavigate()
  const { id, imageUrl, title, artist, isOnView } = artwork

  const handleArtworkClick = () => {
    navigate(`/artworks/${id}`)
  }

  return (
    <div className={styles.wrapper} onClick={handleArtworkClick}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.info_container}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.artist}>{artist || 'Unknown'}</p>
          <p className={styles.isOnView}>{isOnView ? 'Public' : 'Private'}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtworkCard
