import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-4">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-3 text-gray-900">
          <svg className="size-8 text-[#1173d4]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">SoleMate</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal" to="/new-arrivals">New Arrivals</Link>
          <Link className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal" to="/men">Men</Link>
          <Link className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal" to="/women">Women</Link>
          <Link className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal" to="/kids">Kids</Link>
          <Link className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal" to="/sale">Sale</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label className="hidden lg:flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 border border-transparent focus-within:border-[#1173d4] focus-within:ring-1 focus-within:ring-[#1173d4]">
          <span className="material-symbols-outlined text-gray-500"> search </span>
          <input 
            className="form-input w-full min-w-40 border-none bg-transparent p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0" 
            placeholder="Search" 
            value=""
          />
        </label>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
          <span className="material-symbols-outlined"> favorite_border </span>
        </button>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
          <span className="material-symbols-outlined"> shopping_bag </span>
        </button>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 md:hidden">
          <span className="material-symbols-outlined"> menu </span>
        </button>
      </div>
    </header>
  )
}

export default Header
