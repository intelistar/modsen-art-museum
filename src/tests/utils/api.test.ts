// Import dependencies and mock fetch
import { getArtworks, getArtwork } from '../../utils/api'
import { ARTIC_API_URL } from '../../constants/api'

global.fetch = jest.fn()

describe('getArtworks', () => {
  test('should fetch artworks with the correct URL and parameters', async () => {
    const mockResponse = {
      config: {
        iiif_url: 'https://iiif.example.com',
        website_url: 'https://example.com',
      },
      data: [
        {
          title: 'Water Lilies',
        },
      ],
      info: {},
      pagination: { total_pages: 14, current_page: 1, limit: 10 },
    }

    ;(fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    })

    const params = { q: 'Lilies', fields: 'title' }
    const result = await getArtworks('search', params)

    expect(fetch).toHaveBeenCalledWith(
      `${ARTIC_API_URL}artworks/search?` + new URLSearchParams(params)
    )
    expect(result).toEqual(mockResponse)
  })

  test('should handle fetch errors gracefully', async () => {
    ;(fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'))

    const params = { page: '1', limit: '10' }
    await expect(getArtworks('path', params)).rejects.toThrow('Fetch failed')
  })
})

describe('getArtwork', () => {
  test('should fetch a single artwork with the correct URL and parameters', async () => {
    const mockResponse = {
      config: {
        iiif_url: 'https://www.artic.edu/iiif/2',
        website_url: 'http://www.artic.edu',
      },
      data: { id: 4, title: 'Priest and Boy' },
      info: {},
    }
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    })

    const params = { fields: 'id, title' }
    const result = await getArtwork(4, params)

    expect(fetch).toHaveBeenCalledWith(
      `${ARTIC_API_URL}artworks/4?` + new URLSearchParams(params)
    )
    expect(result).toEqual(mockResponse)
  })

  test('should handle fetch errors gracefully', async () => {
    ;(fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'))

    const params = { fields: 'id, title' }
    await expect(getArtwork(4, params)).rejects.toThrow('Fetch failed')
  })
})
