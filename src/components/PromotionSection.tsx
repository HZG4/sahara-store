import React from 'react'
import { Promotion } from '../types'

const promotion: Promotion = {
  id: '1',
  title: 'Summer Sale',
  description: 'Up to 50% off on select styles',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4VWth6VMGzuN9MtLcHIDJNW6ZI1TRgC-9rRGm12G8Mq6c3bs7QQmO0H251wR8L5ZzV9jIQs4wbfbBZHwjS9DbY-3M6FXMgKmIKqn6gDWj25wjiJV_K0fl7HIxnsWW_n649DMvxoeArdjcCs8PW_yI3CCY82xemsa3zNbr6nURIytQyF1PhAI5doMXsnDxLG9jtViABpFQc_5Go6_Aw7BSG9haOSlKMkBvKw1IUYERk20_qP55SmVn2E3CLPaDKIDHzZfhR__emO0',
  buttonText: 'Shop Now'
}

function PromotionSection() {
  return (
    <div className="p-4">
      <h2 className="px-4 pb-6 text-3xl font-bold tracking-tight text-gray-900">Seasonal Promotions</h2>
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-sm md:flex-row">
        <div className="w-full md:w-1/2">
          <div 
            className="h-64 w-full bg-cover bg-center md:h-full" 
            style={{ backgroundImage: `url("${promotion.image}")` }}
          ></div>
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-900">{promotion.title}</h3>
          <p className="mt-2 text-lg text-gray-600">{promotion.description}</p>
          <button className="mt-6 flex w-fit items-center justify-center rounded-md bg-[#1173d4] px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
            <span>{promotion.buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromotionSection
