import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../types'

const categories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGw-DafNNGfmW3se83fJaRG6miNP6XDI5tiEFyf3epabjw9ZS00neyWZEar5O3DKNBADbsMNPU5joBLsJYyRlikyykQqiWCWP1cceGhqjMiY-KtEa0F0yMeULlMXHbGVPTnBaMdpJCvMWx1K10QPGWV2AMh_swcinChOTLdeiY9ilVRdBpoAzmVjBeIkcdiX9Hy7j8BSYzwdMvKC7gWzKvMjCYrQpbzGV7mUkQ19qvH9z8wXyKPh9SFLiVqhinUnPkzqoDJahXW2s',
    isActive: true
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcyv9x0jxM2chiYH7dx2i3nY4E_G2nKCsp9wf8lLDLrMNOjmEbKGOqi81VMaLnO3pcocKIrmZWr-IWHykNpDck41Ow7wBcL6quBLcsNXC8Mi2W5HIm0Sn0InYgBipXQUr3DYyZUE6R1ZHU8E6OQX1ECt0qyqE4_mfbThVMYHJLaVZlvhLWaNtUJ6kXoxOu3YeWQAP9-GLmNsFqAGzwaUBUxU7de4NQtB88zjIiTOby355ZX-bMGVg6__bHHyNE4jHqdaybwuvlfmg'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQrcZshasJ_XlOwWngnzTlifxZ_CsvsHaw4-oZW46CgTlx1vBzRiluNGdunN19EKUzKsDvQbvjJB6ReJCEeuBod_2aJIR1m7_YCsQ9onexae0jFFbD8OVICUm-ZO-pO-n7uYlQc0I7fXrMTboPdY-i_7P1n2biaUCB3_Cw2mKm5OPEWQqp947S7jsltMxVN-xBPOXvG1q_Mi4Qvbnr1qETuFe12lePni-0ZYmKkNEHwSSCPTkQ4diqTcmazmK3yiEZCBlkdhVFVSk'
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN0v6jijQ-GOYzTxXKnYFKVzNF_6JE5kA1pQvyZplJzRm-_3WWp38NFsQTq80Sz1G65wcqWe5pMVYdCHwEl-Gfe1QjxpNGUvrigVid5i-bgak3--tTDPkDCi7CuToGgv9wiUtUiOZBmfM3Cp3xfZg6bV-m1IA6SywrGnsPifkkqz8lG6e1URgmNux4a-NQMo-qmFnz_KP-pnP3dM9Sh0PpA6o3RHElP1LdfrDYxouuDXc2hkOe-GB6gzuC4s53m9el4EFLVc91PLo'
  },
  {
    id: 'casual',
    name: 'Casual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fYvV0ByXEAF2nnLD9MTxNlhSqrzvVBmHtQejzYpMe2NTKHB2r7QFUqVHdj8wjRTgO4YJm17I_oJsQtIJ79JVkPTW9vVNeZ7_Zm3HNRPwveaB31d4p1cRsj3hFW4y_jKZsEjxcXgzwnBRjyc7cZrHcEzltzkv-P5aZceOin3g8pQNXhJNgXZp7KtA59D6NYnd6uNENvvX6lKEBOkr9empaika_rIX_4a8Z9jVsDsrY2vgvOHgqBTJkGLRKFtpd1zaYYJbWydKWtw'
  },
  {
    id: 'formal',
    name: 'Formal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUlxmXNTiSzOGlddCx8i8Kmg9RdauVtOL033V1P1f7fvbdehps00B6pAYbh5Ja8YenBSurXadT1rNUc9e4s302Uft1SYrV19ozi3DUff-7zjOFhQyxLio78ZuT22Dd7UsvttIRROeZvTKQoKJjq7FrYXwAzZ2aCrpXgF3ZyeA1qIiFFphSDXNeYv_fYs64osdrp9csbszpJMwx7eNGcXohIcHeGf59roM4nh1CzOtlNxL_HbsVAnuFKu80t-5E8MyYHl4sJ-HYMko'
  }
]

function CategorySection() {
  return (
    <div className="mb-12">
      <h2 className="px-4 pb-6 text-3xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
      <div className="border-b border-gray-200">
        <div className="flex space-x-6 overflow-x-auto px-4 pb-2">
          {categories.map((category) => (
            <Link 
              key={category.id}
              className={`group flex flex-col items-center gap-3 border-b-2 py-3 ${
                category.isActive 
                  ? 'border-[#1173d4]' 
                  : 'border-transparent hover:border-gray-300'
              }`} 
              to={`/${category.id}`}
            >
              <div 
                className="h-16 w-16 overflow-hidden rounded-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                style={{ backgroundImage: `url("${category.image}")` }}
              ></div>
              <p className={`text-sm font-medium ${
                category.isActive 
                  ? 'text-gray-900 font-semibold' 
                  : 'text-gray-500 group-hover:text-gray-900'
              }`}>
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySection
