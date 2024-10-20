import React, { useContext } from 'react';
import Navbar from './Navbar';
import UserContext from './Productcontext';
import { NavLink } from 'react-router-dom';

function Shoppage() {
  const { user, items, setUser } = useContext(UserContext);
  console.log(items);

  return (
    <>
      <Navbar />
      <h1 className='text-blue-300 text-5xl text-center pt-2 mb-3'>Let's Shop</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items.map((item, index) => {
          return (
            <div key={index} className="max-w-xs mx-auto">
              <div className="group relative block overflow-hidden rounded-lg shadow-lg">
                <button
                  className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                  <span className="sr-only">Wishlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src={item.images}
                  alt=""
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="relative border border-gray-100 bg-white p-4">
                  <span className="whitespace-nowrap bg-yellow-400 px-2 py-1 text-xs font-medium">New</span>

                  <h3 className="mt-3 text-sm font-medium text-gray-900">{item.title}</h3>

                  <p className="mt-1 text-xs text-gray-700">${item.price}</p>

                  <form className="mt-3">
                    
                    <NavLink to={`/product/${item.id}`} state={{invdata:item}}
                      className="block w-full rounded bg-yellow-400 p-2 text-xs font-medium transition hover:scale-105 text-center"
                    >
                      View Detail
                    </NavLink>
                    
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Shoppage;
