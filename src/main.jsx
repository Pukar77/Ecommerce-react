import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Shoppage from './Shoppage.jsx'
import Contact from './Contact.jsx'
import { UserContextProvider } from './Productcontext.jsx'


const router = createBrowserRouter([

  {
    path:'/',
    element:<Navbar/>
  },

  {
  path:'/shoppage',
  element:<Shoppage/>
  },

  {
path:'/contact',
element:<Contact/>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    <App />
    <RouterProvider router={router}/>
    </UserContextProvider>
  </StrictMode>,
)
