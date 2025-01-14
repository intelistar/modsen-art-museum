import { ArtworkRaw } from './Artwork'
import { PaginationRaw } from './Pagination'

export interface Config {
  iiif_url: string
  website_url: string
}

export interface ArtworkResponse {
  config: Config
  data: ArtworkRaw
  info: Record<string, unknown>
}

export interface ArtworksResponse {
  config: Config
  data: ArtworkRaw[]
  info: Record<string, unknown>
}

export interface PaginatedResponse extends ArtworksResponse {
  pagination: PaginationRaw
}
