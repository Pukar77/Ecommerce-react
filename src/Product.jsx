import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';

function Product() {
    const location = useLocation();
    const {invdata} = location.state;
  return (
    <div>
       <Navbar/>
       <div href="#" className="group block overflow-hidden flex justify-around items-center ">
  <div className="relative w-60 h-[200px] sm:h-[450px] my-10">
    <img
      src={invdata.images}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={invdata.images}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <button className='bg-yellow-400 h-12 w-40 rounded-xl my-10'>Add to cart</button>

 
</div>



<div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>
      <dd className="text-gray-700 sm:col-span-2">{invdata.title}</dd>
    </div>

   

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Category</dt>
      <dd className="text-gray-700 sm:col-span-2">{invdata.category.name}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Price</dt>
      <dd className="text-gray-700 sm:col-span-2">${invdata.price}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Description</dt>
      <dd className="text-gray-700 sm:col-span-2">
       {invdata.description}
      </dd>
    </div>
  </dl>
</div>
    </div>
  )
}

export default Product