import { useState, useEffect, useCallback } from 'react'

const useFavorites = () => {
  const getFavoritesFromStorage = (): number[] => {
    const storedData = sessionStorage.getItem('favorites')
    return storedData ? JSON.parse(storedData) : []
  }

  const [favorites, setFavorites] = useState<number[]>(getFavoritesFromStorage)

  const toggleFavorite = useCallback((item: number) => {
    const currentFavorites = getFavoritesFromStorage()

    const updatedFavorites = currentFavorites.includes(item)
      ? currentFavorites.filter((favorite) => favorite !== item)
      : [...currentFavorites, item]

    sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }, [])

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'favorites') {
        setFavorites(getFavoritesFromStorage())
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { favorites, toggleFavorite }
}

export default useFavorites
