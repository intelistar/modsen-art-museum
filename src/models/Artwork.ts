export interface Artwork {
  id: number
  title: string
  imageUrl: string
  artist: string
  isOnView: boolean
  date: number
}
export interface DetailedArtwork extends Artwork {
  placeOfOrigin?: string
  dimensions?: string
  creditLine?: string
  galleryTitle?: string
}
export interface ArtworkRaw {
  id: number
  title: string
  image_id: string
  artist_title: string
  is_on_view: boolean
  date_end: number
  place_of_origin?: string
  dimensions?: string
  credit_line?: string
  gallery_title?: string
}
