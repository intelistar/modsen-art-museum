import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Layout from '@components/Layout'
import Artwork from '@pages/Artwork'
import Favorites from '@pages/Favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/artworks/:id',
        element: <Artwork />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
