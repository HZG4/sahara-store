import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import CategorySection from '../components/CategorySection'
import ProductGrid from '../components/ProductGrid'
import PromotionSection from '../components/PromotionSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1 justify-center pt-20 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex w-full max-w-7xl flex-col">
            <Hero />
            <SearchBar />
            <CategorySection />
            <ProductGrid />
            <PromotionSection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
