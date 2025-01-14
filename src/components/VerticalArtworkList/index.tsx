import { FC } from 'react'
import { Artwork } from '@models/Artwork'
import styles from './styles.module.scss'
import ArtworkItem from '@components/ArtworkItem'

interface Props {
  artworks: Artwork[]
}

const VerticalArtworkList: FC<Props> = ({ artworks }) => {
  return (
    <div className={styles.wrapper}>
      {artworks.map((artwork) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

export default VerticalArtworkList
