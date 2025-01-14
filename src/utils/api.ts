import { ARTIC_API_URL } from '@constants/api'
import { ArtworksResponse } from '@models/Response'

export const fetchArtworks = async (
  path: string,
  params: Record<string, string>
): Promise<ArtworksResponse> => {
  const response = await fetch(
    `${ARTIC_API_URL}artworks/${path}?` + new URLSearchParams(params)
  )
  const data = await response.json()

  return data
}

export const fetchArtwork = async (
  id: number,
  params?: Record<string, string>
): Promise<ArtworksResponse> => {
  const response = await fetch(
    `${ARTIC_API_URL}artworks/${id}?` + new URLSearchParams(params)
  )
  const data = await response.json()
  return data
}
