import React from 'react'
import { Link } from 'react-router-dom'
export default function Userprofile(props) {
  const username = localStorage.getItem("username");
  return (
    <>
        <div className="fixed bg-gray-800 bg-opacity-75 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex justify-end">
          <Link to="/"><button className="p-2 focus:outline-none">
            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z"/></svg>
          </button></Link>
        </div>
        <div className="px-6 pb-6">
          <div className='flex justify-center pb-6'>
          <img className = "w-32" src='./profile-user.png'></img>
          </div>
          <Link to="/"><button class='p-1 md:hidden bg-green-500 text-white rounded-lg px-5 py-2 hover:bg-green-800' onClick={props.logout}>Logout</button></Link>
          <h1 className="text-2xl font-bold mb-4">Welcome back {username}! </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales, velit vel malesuada interdum, tortor turpis lobortis enim,
            ac dictum eros lacus quis ex.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
