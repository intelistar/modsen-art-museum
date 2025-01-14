import { ARTIC_API_URL } from '@constants/api'
import { ArtworkResponse, PaginatedResponse } from '@models/Response'

export const getArtworks = async (
  path: string,
  params: Record<string, string>
): Promise<PaginatedResponse> => {
  const response = await fetch(
    `${ARTIC_API_URL}artworks/${path}?` + new URLSearchParams(params)
  )
  const data = await response.json()

  return data
}

export const getArtwork = async (
  id: number,
  params?: Record<string, string>
): Promise<ArtworkResponse> => {
  const response = await fetch(
    `${ARTIC_API_URL}artworks/${id}?` + new URLSearchParams(params)
  )
  const data = await response.json()
  return data
}
