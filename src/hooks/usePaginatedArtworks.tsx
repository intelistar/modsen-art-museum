import { Artwork, ArtworkRaw } from '@models/Artwork'
import { Pagination } from '@models/Pagination'
import { getArtworks } from '@utils/api'
import { mapToPaginatedArtworks } from '@utils/mappers'
import { useState, useEffect, useCallback } from 'react'

const DEFAULT_ARTWORK_FIELDS: Array<keyof ArtworkRaw> = [
  'id',
  'title',
  'image_id',
  'artist_title',
  'is_on_view',
  'date_end',
]

const usePaginatedArtworks = (
  page: string = '1',
  limit: string = '5',
  fields: Array<keyof ArtworkRaw> = DEFAULT_ARTWORK_FIELDS
) => {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [paginationInfo, setPaginationInfo] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArtworks = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getArtworks('', {
        page,
        limit,
        fields: fields.join(','),
      })

      const { artworks, pagination } = mapToPaginatedArtworks(response)

      setArtworks(artworks)
      setPaginationInfo(pagination)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [page, limit, fields])

  useEffect(() => {
    fetchArtworks()
  }, [fetchArtworks])

  return { artworks, paginationInfo, loading, error }
}

export default usePaginatedArtworks
