import React, { useContext } from 'react'
import Navbar from './Navbar'
import UserContext from './Productcontext'

function Help() {

    const {user, setUser, items} = useContext(UserContext);
 console.log(items);

 function error(){
    alert("This Product is only for premium member")
 }
 


  return (
    <>
         <Navbar/>
         <h1 className='text-blue-300 text-5xl text-center pt-2 mb-3'>Only for Members</h1>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>

{items.slice(2,22).map((items,index)=>{

return(
    <div key={index} className="max-w-xs mx-auto mt-4">

<div href="#" className="relative block rounded-tr-3xl border border-gray-100">
  <span
    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
  >
    Save 10%
  </span>

  <img
    src={items.images}
    alt=""
    className="h-80 w-full rounded-tr-3xl object-cover"
  />

  <div className="p-4 text-center">
    <strong className="text-xl font-medium text-gray-900"> {items.title} </strong>
    <strong className="text-xl font-medium text-gray-900"> ${items.price} </strong>

    <p className="mt-2 text-pretty text-gray-700">
     {items.description.slice(0,300)}
    </p>
<div className='flex justify-center'>
    <button onClick={error}
      className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900 "
    >
      Learn More
    </button>
    </div>
  </div>
</div>



    </div>

)

})} 
</div>        
     
    </>
  )
}

export default Help