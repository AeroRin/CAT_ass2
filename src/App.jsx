import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Header.jsx' 
import Hotels from './Hotels.jsx' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hotels />, // Default route (you can change to a homepage component)
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/hotels",
    element: <Hotels />,
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <h1>404: Page Not Found</h1>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;