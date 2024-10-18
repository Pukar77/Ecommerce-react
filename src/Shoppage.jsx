import React, { useContext } from 'react'
import Navbar from './Navbar'
import UserContext from './Productcontext';


function Shoppage() {

  const {user , items, setUser} = useContext(UserContext);
  console.log(items);
  return (

    
    <>
    <Navbar/>
    <h1 className='text-blue-300 text-5xl text-center pt-2 mb-3'>Lets Shop</h1>

    </>
  )
}

export default Shoppage