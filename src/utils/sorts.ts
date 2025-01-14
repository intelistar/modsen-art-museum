import { SORT_ORDER } from '@constants/sorts'
import { Artwork } from '../models/Artwork'

export const sortArtworks = (
  artworks: Artwork[],
  sortOrder: SORT_ORDER | ''
) => {
  switch (sortOrder) {
    case SORT_ORDER.DATE_ASC:
      return [...artworks].sort((a, b) => a.date - b.date)
    case SORT_ORDER.DATE_DESC:
      return [...artworks].sort((a, b) => b.date - a.date)
    case SORT_ORDER.TITLE_ASC:
      return [...artworks].sort((a, b) => a.title.localeCompare(b.title))
    case SORT_ORDER.TITLE_DESC:
      return [...artworks].sort((a, b) => b.title.localeCompare(a.title))
    default:
      return artworks
  }
}
