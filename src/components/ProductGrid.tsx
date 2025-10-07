import React from 'react'
import { Product } from '../types'

const products: Product[] = [
  {
    id: '1',
    name: 'Performance Runners',
    description: 'Designed for speed and comfort',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7umxb9Af8YpwFW1lc0qnT9cPgWK9Yo9OfGXZQKcfYdsOExoswkT6vrhMhVl-rN2pTZo0fvtljSSa6PqNcxHHZHBfR-mRfxtuYrlv_Uz1Lur_jOl7V11uq-JOqhSKScikWj6d3DUyd8xL0XAlhGwn1llSIoeoqZrQ-EjYOGZrKCGItC98pzl3WjIK7SNwfVC7uHtmAlkk_wq5EMb4ZpUUAybft3IipzSyKDHov3TsKom4w8DySjSAazSUYJXbxGK7gBT394TD2TJg'
  },
  {
    id: '2',
    name: 'Street Style Sneakers',
    description: 'Urban cool for everyday wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZB0BLepttQwrW-3-B9r4A5YTcFwjMm2shUNgp5H8jPj0RjWGaNtsPwY6-EC_ZRGpRdRdsRShkI1GZ-VRKrzApccx2bnL8EOTaCVkRCOwZDsoRPqqK0IkIHyC_t7IW4rN-McMXzYNCZ30LjUptihRtwZ8TAyQPHpBCEwbq8EDr0N8faam0zkYhCoKxKOmvy5RIdS03Q2JNGzw27tRqob78ZDWBjiQcjqlYBDP6tQcYEACE6LLAz7CEev-G1zXUONhy87nsbn8ilzg'
  },
  {
    id: '3',
    name: 'All-Weather Boots',
    description: 'Durable and stylish for any terrain',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRf8XuGnGeAyvJ8ym-M8vUsuKjTnBjw26jyjUAXEXsgW3YBZxFFNrbQQyI6UzeiidQnzIl1qE7ZS8EpOhKklAGI_nyhD_xocvMDlPWjfyDEJExNFDv59sVqUah9Ly6Ibe-T-g9KeDBxm36SkIDtAFS5jL3pbhBFBVbZnSOWfM-9o_rM2YwlAf2qzJvvpKa4fUWxOaUB5bXz79B1hlc-IdJ6bCB6kWbJ4QMaLPpgFBo7zCEsaR0OmQ82YQX50Jq2BfTg3Zgel3FIHw'
  },
  {
    id: '4',
    name: 'Summer Sandals',
    description: 'Lightweight and breezy for warm days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2V4aZTbdrHJK8R23EkyWXT2dSLEvCajiEHlzGczisBR8MhRn-YLvzMcP5GtoKuxN74q4Iq68vZH_T9O9E3DR0s6hgqMwbYOTDy3-D_LSv7fl853JhHcAc07h-mH2Ek3n3KybmGaK_19ZwmXYRd0ySlEP-pmKFqA3Ln5nXoCVbQCHZhkZD5GcaUCRY8hvXYMzSoc-yYde_EGJ-zS34q_bjEuBF_nvhlchVMzBziM-QgFIu2T5sc3eW1xLmr7az3MGv5Kt96n8B4g0'
  }
]

function ProductGrid() {
  return (
    <div className="mb-12">
      <h2 className="px-4 pb-6 text-3xl font-bold tracking-tight text-gray-900">Popular Picks</h2>
      <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group flex cursor-pointer flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="w-full transform bg-cover bg-center transition-transform duration-300 group-hover:scale-110 aspect-square" 
                style={{ backgroundImage: `url("${product.image}")` }}
              ></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-base text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
