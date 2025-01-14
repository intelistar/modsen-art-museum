import { ARTIC_API_URL } from '@constants/api'
import { PaginatedResponse } from '@models/Response'

export const fetchArtworks = async (
  path: string,
  params: Record<string, string>
): Promise<PaginatedResponse> => {
  const response = await fetch(
    `${ARTIC_API_URL}artworks${path}?` + new URLSearchParams(params)
  )
  const data = await response.json()

  return data
}
