import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Home, Landing, Services } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/service",
        element: <Services />,
      },
   ] }])

function App() {

  return (
              <RouterProvider router={router} />

  )
}

export default App
