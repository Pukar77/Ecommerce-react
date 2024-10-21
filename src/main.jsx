import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Product from './Product.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shoppage from './Shoppage.jsx'
import Contact from './Contact.jsx'
import { UserContextProvider } from './Productcontext.jsx'
import Homepage from './Homepage.jsx'
import Help from './Help.jsx'


const router = createBrowserRouter([

  {
    path:'/',
    element:<Homepage/>
  },

  {
  path:'/shoppage',
  element:<Shoppage/>
  },

  {
path:'/contact',
element:<Contact/>
  },

  {
    path:'/product/:id',
    element:<Product/>
  },

  {
    path:'/help',
    element:<Help/>
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    
    <RouterProvider router={router}/>
    </UserContextProvider>
  </StrictMode>,
)
