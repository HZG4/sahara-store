import React from 'react'

function Hero() {
  return (
    <div className="relative mb-12 flex min-h-[480px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-cover bg-center p-8" 
         style={{
           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3vS3yaIW8dhD9jf-LLKNUgrfRNkjlrtvMjBW5loqU9IRde5-XFBTj9u2xf8IhcDsQbBa_7JXCnl8loSnZvNo33rULJO2ADtPb-LIHOayFIVRTQR22-RBUiZUjuxR06aEvRtl7jMTkl573GiV6rufVRaU-Ywv7b2KVvh17BaaAPKmUswtkyaqWJQTFyXzQhTWJoLcjN3LneaQkoBIpFRE8q7XbJFV4YxMpkIepIkpnhbqmRiKr6KzftcVKEYxjvSb0qgZM1WF3sXU")'
         }}>
      <div className="flex flex-col gap-4 text-left text-white">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Step into Style</h1>
        <p className="max-w-md text-lg">Explore the latest collections and find your perfect fit.</p>
      </div>
      <button className="mt-6 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#1172d4] px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-blue-700">
        <span>Shop Now</span>
      </button>
    </div>
  )
}

export default Hero
