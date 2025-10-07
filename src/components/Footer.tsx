import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 text-gray-900">
              <svg className="size-8 text-[#1173d4]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
              <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">SoleMate</h2>
            </Link>
            <p className="mt-4 text-base text-gray-500">Your destination for stylish and comfortable footwear.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/new-arrivals">New Arrivals</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/men">Men</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/women">Women</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/kids">Kids</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/about">About Us</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/contact">Contact</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/returns">Returns & Exchanges</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-base text-gray-500 hover:text-gray-900" to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base text-gray-500">© 2024 SoleMate. All rights reserved.</p>
          <div className="flex space-x-6">
            <a className="text-gray-500 hover:text-gray-900" href="https://twitter.com/solemate" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46,6.54a.5.5,0,0,0-.46-.34H19.78a5.53,5.53,0,0,0-10.42,0H7.22a.5.5,0,0,0-.46.34L3.2,16.22a.5.5,0,0,0,.46.66h2.15a.5.5,0,0,0,.49-.4l.19-.58a2.5,2.5,0,0,1,4.8,0l.19.58a.5.5,0,0,0,.49.4h7.1a.5.5,0,0,0,.49-.4l.19-.58a2.5,2.5,0,0,1,4.8,0l.19.58a.5.5,0,0,0,.49.4H20.3a.5.5,0,0,0,.46-.66Zm-11,2.92a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,11.5,9.46Z"></path>
              </svg>
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="https://instagram.com/solemate" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.163c3.204,0,3.584,0.012,4.85.07,3.252.148,4.771,1.691,4.919,4.919.058,1.265.069,1.645.069,4.85s-0.012,3.584-0.07,4.85c-0.148,3.227-1.669,4.771-4.919,4.919-1.266.058-1.644.07-4.85.07s-3.584-0.012-4.85-0.07c-3.252-0.148-4.771-1.691-4.919-4.919-0.058-1.265-0.069-1.645-0.069-4.85s0.012-3.584,0.07-4.85c0.148-3.227,1.669-4.771,4.919-4.919,1.266-.058,1.644-.07,4.85-.07Zm0-2.163c-3.259,0-3.667,0.014-4.947,0.072-4.358,0.198-6.131,2.025-6.329,6.329-0.058,1.28-0.072,1.688-0.072,4.947s0.014,3.667,0.072,4.947c0.198,4.304,2.025,6.131,6.329,6.329,1.28.058,1.688.072,4.947.072s3.667-0.014,4.947-0.072c4.304-0.198,6.131-2.025,6.329-6.329,0.058-1.28,0.072-1.688,0.072-4.947s-0.014-3.667-0.072-4.947c-0.198-4.304-2.025-6.131-6.329-6.329-1.28-0.058-1.688-0.072-4.947-0.072Z"></path>
                <path d="M12,6.837c-2.846,0-5.163,2.317-5.163,5.163s2.317,5.163,5.163,5.163,5.163-2.317,5.163-5.163-2.317-5.163-5.163-5.163Zm0,8.326c-1.741,0-3.163-1.422-3.163-3.163s1.422-3.163,3.163-3.163,3.163,1.422,3.163,3.163-1.422,3.163-3.163,3.163Z"></path>
                <circle cx="17.168" cy="6.836" r="1.25"></circle>
              </svg>
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="https://facebook.com/solemate" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24,12c0-6.627-5.373-12-12-12S0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.47H7.149V12h3.057V9.357c0-3.022,1.791-4.685,4.55-4.685,1.304,0,2.688.235,2.688.235v2.953H15.83c-1.488,0-1.956.93-1.956,1.884V12h3.328l-.532,3.47h-2.796v8.382C19.568,22.984,24,18.016,24,12Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
