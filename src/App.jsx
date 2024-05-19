import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Home, Landing, Services } from './pages';
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
      {
        path:"/contact",
        element: <Contact />,
      },
   ] }])

function App() {

  return (
              <RouterProvider router={router} />

  )
}

export default App
