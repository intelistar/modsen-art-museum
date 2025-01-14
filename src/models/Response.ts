import { ArtworkRaw } from './Artwork'
import { PaginationRaw } from './Pagination'

export interface Config {
  iiifUrl: string
  websiteUrl: string
}

export interface PaginatedResponse {
  config: Config
  data: ArtworkRaw[]
  pagination: PaginationRaw
  info: Record<string, unknown>
}
