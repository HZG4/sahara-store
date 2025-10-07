import React from 'react'

function SearchBar() {
  return (
    <div className="mb-12 px-4 py-3 sm:hidden">
      <label className="flex flex-col">
        <div className="flex w-full flex-1 items-stretch rounded-lg">
          <div className="text-gray-500 flex items-center justify-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-100 pl-4">
            <span className="material-symbols-outlined"> search </span>
          </div>
          <input 
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border border-gray-200 bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4] h-12" 
            placeholder="Search for shoes" 
            value=""
          />
        </div>
      </label>
    </div>
  )
}

export default SearchBar
