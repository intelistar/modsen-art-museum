import { FC } from 'react'
import { Artwork } from '../../models/Artwork'
import ArtworkCard from '@components/ArtworkCard'
import styles from './styles.module.scss'

interface Props {
  artworks: Artwork[]
}

const HorizontalArtworkList: FC<Props> = ({ artworks }) => {
  return (
    <div className={styles.list}>
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

export default HorizontalArtworkList
