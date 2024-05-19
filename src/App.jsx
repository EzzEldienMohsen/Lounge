import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Booking, Contact, Home, Landing, Login, Services, SignUp } from './pages';
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
      {
        path:"/booking",
        element: <Booking />,
      },
      {
        path:"/signup",
        element: <SignUp />,
      },
      {
        path:"/login",
        element: <Login />,
      },
   ] }])

function App() {

  return (
              <RouterProvider router={router} />

  )
}

export default App
