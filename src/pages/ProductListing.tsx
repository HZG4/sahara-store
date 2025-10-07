import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import FilterSidebar from '../components/FilterSidebar'
import ProductListingGrid from '../components/ProductListingGrid'
import Footer from '../components/Footer'

// Category configuration
const categoryConfig = {
  men: {
    title: "Men's Shoes",
    description: "Discover our collection of men's footwear",
    activeButton: "Men's"
  },
  women: {
    title: "Women's Shoes", 
    description: "Explore our women's shoe collection",
    activeButton: "Women's"
  },
  kids: {
    title: "Kids' Shoes",
    description: "Find the perfect shoes for your little ones",
    activeButton: "Kids'"
  },
  sale: {
    title: "Sale Items",
    description: "Great deals on selected footwear",
    activeButton: "Sale"
  },
  'new-arrivals': {
    title: "New Arrivals",
    description: "Check out our latest shoe collection",
    activeButton: "All"
  },
  sports: {
    title: "Sports Shoes",
    description: "Performance footwear for athletes",
    activeButton: "All"
  },
  casual: {
    title: "Casual Shoes",
    description: "Comfortable everyday footwear",
    activeButton: "All"
  },
  formal: {
    title: "Formal Shoes",
    description: "Elegant shoes for special occasions",
    activeButton: "All"
  }
}

function ProductListing() {
  const { category } = useParams<{ category: string }>()
  const location = useLocation()
  
  // Get current category or default to 'all'
  const currentCategory = category || 'all'
  const config = categoryConfig[currentCategory as keyof typeof categoryConfig] || {
    title: "All Products",
    description: "Explore our entire collection of footwear",
    activeButton: "All"
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-1 pt-20">
          <FilterSidebar />
          <div className="flex-1 p-6">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <p className="text-black text-4xl font-bold leading-tight">{config.title}</p>
                <p className="text-gray-600 text-base font-normal leading-normal">{config.description}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-sm font-medium leading-normal flex items-center justify-center rounded-md px-4 h-10 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                  Sort by: Featured
                </button>
              </div>
            </div>
            
            <div className="flex gap-3 mb-6 flex-wrap">
              <button className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
                config.activeButton === "All" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}>
                All
              </button>
              <button className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
                config.activeButton === "Men's" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}>
                Men's
              </button>
              <button className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
                config.activeButton === "Women's" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}>
                Women's
              </button>
              <button className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
                config.activeButton === "Kids'" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}>
                Kids'
              </button>
              <button className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
                config.activeButton === "Sale" 
                  ? "bg-red-100 text-red-600" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}>
                Sale
              </button>
            </div>
            
            <ProductListingGrid category={currentCategory} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default ProductListing
