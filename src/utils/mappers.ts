import { Artwork, ArtworkRaw, DetailedArtwork } from '@models/Artwork'
import { Pagination, PaginationRaw } from '@models/Pagination'
import {
  ArtworkResponse,
  ArtworksResponse,
  PaginatedResponse,
} from '@models/Response'

export function mapToDetailedArtwork(
  response: ArtworkResponse
): DetailedArtwork {
  const {
    id,
    title,
    artist_title,
    is_on_view,
    image_id,
    date_end,
    place_of_origin,
    dimensions,
    credit_line,
    gallery_title,
  } = response.data
  const { iiif_url } = response.config

  return {
    id,
    title,
    artist: artist_title,
    isOnView: is_on_view,
    imageUrl: `${iiif_url}/${image_id}/full/843,/0/default.jpg`,
    date: date_end,
    placeOfOrigin: place_of_origin,
    dimensions,
    creditLine: credit_line,
    galleryTitle: gallery_title || '',
  }
}

export function mapToArtworks(response: ArtworksResponse): Artwork[] {
  const { config, data } = response
  return data.map((artwork: ArtworkRaw) =>
    mapToArtwork(artwork, config.iiif_url)
  )
}

export function mapToPaginatedArtworks(response: PaginatedResponse) {
  const { config, data, pagination } = response
  const artworks: Artwork[] = data.map((artwork: ArtworkRaw) =>
    mapToArtwork(artwork, config.iiif_url)
  )
  return { artworks, pagination: mapToPagination(pagination) } as const
}

function mapToArtwork(artwork: ArtworkRaw, iiif_url: string): Artwork {
  return {
    id: artwork.id,
    title: artwork.title,
    artist: artwork.artist_title,
    isOnView: artwork.is_on_view,
    date: artwork.date_end,
    imageUrl: `${iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`,
  }
}

function mapToPagination(pagination: PaginationRaw): Pagination {
  return {
    currentPage: pagination.current_page,
    totalPages: pagination.total_pages,
  }
}
