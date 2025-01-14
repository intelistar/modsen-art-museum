import { Artwork, ArtworkRaw } from '@models/Artwork'
import { getArtworks } from '@utils/api'
import { mapToArtworks } from '@utils/mappers'
import { useState, useEffect, useCallback } from 'react'

const DEFAULT_ARTWORK_FIELDS: Array<keyof ArtworkRaw> = [
  'id',
  'title',
  'image_id',
  'artist_title',
  'is_on_view',
  'date_end',
]

const useArtworksByIds = (
  ids: number[],
  fields: Array<keyof ArtworkRaw> = DEFAULT_ARTWORK_FIELDS
) => {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArtworks = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getArtworks('', {
        ids: ids.join(','),
        fields: fields.join(','),
      })

      const artworks = mapToArtworks(response)

      setArtworks(artworks)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [ids, fields])

  useEffect(() => {
    fetchArtworks()
  }, [fetchArtworks])

  return { artworks, loading, error }
}

export default useArtworksByIds
