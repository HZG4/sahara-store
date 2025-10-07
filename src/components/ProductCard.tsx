import React from 'react'

interface ProductCardProps {
  id: string
  name: string
  price: string
  image: string
}

function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="flex flex-col group">
      <div className="relative">
        <div 
          className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-md" 
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-gray-600">favorite_border</span>
        </button>
      </div>
      <div className="pt-3">
        <p className="text-black text-lg font-semibold leading-normal">{name}</p>
        <p className="text-gray-600 text-base font-medium leading-normal">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
