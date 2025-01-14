import { ArtworkRaw, DetailedArtwork } from '@models/Artwork'
import { getArtwork } from '@utils/api'
import { mapToDetailedArtwork } from '@utils/mappers'
import { useCallback, useEffect, useState } from 'react'

const DETAILED_ARTWORK_FIELDS: Array<keyof ArtworkRaw> = [
  'id',
  'title',
  'image_id',
  'artist_title',
  'is_on_view',
  'date_end',
  'place_of_origin',
  'dimensions',
  'credit_line',
  'gallery_title',
]

const useArtwork = (
  id: number,
  fields: Array<keyof ArtworkRaw> = DETAILED_ARTWORK_FIELDS
) => {
  const [artwork, setArtwork] = useState<DetailedArtwork | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArtwork = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await getArtwork(id, { fields: fields.join(',') })

      const detailedArtwork = mapToDetailedArtwork(data)

      setArtwork(detailedArtwork)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [id, fields])

  useEffect(() => {
    fetchArtwork()
  }, [fetchArtwork])

  return { artwork, loading, error }
}

export default useArtwork
