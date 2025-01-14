import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Layout from '@components/Layout'

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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
