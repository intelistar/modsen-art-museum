import { FC } from 'react'
import { Artwork } from '@models/Artwork'
import styles from './styles.module.scss'
import ArtworkItem from '@components/ArtworkItem'
import useFavorites from '@hooks/useFavorites'

interface Props {
  artworks: Artwork[]
}

const VerticalArtworkList: FC<Props> = ({ artworks }) => {
  const { favorites, toggleFavorite } = useFavorites()

  return (
    <div className={styles.wrapper}>
      {artworks.map((artwork) => (
        <ArtworkItem
          key={artwork.id}
          artwork={artwork}
          isFavorite={favorites.includes(artwork.id)}
          toggleFavorite={() => toggleFavorite(artwork.id)}
        />
      ))}
    </div>
  )
}

export default VerticalArtworkList
