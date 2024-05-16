import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Home, Landing } from './pages';
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
   ] }])

function App() {

  return (
              <RouterProvider router={router} />

  )
}

export default App
