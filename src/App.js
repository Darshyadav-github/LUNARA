import React, { useState } from 'react';
import './App.css';

/**
 * Main product page for LUNARA.
 * Displays product details, images, and checkout controls.
 */
function App() {
  // Quantity state for Add to Cart selector
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="app min-h-screen font-sans text-white">
      {/* Sticky navigation bar */}
      <header className="sticky top-0 z-10 w-full backdrop-blur bg-black/40 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2 text-[#F7F6EC] font-serif text-xl font-bold">
          {/* Replace icon span with brand logo as needed */}
          <span>✦</span>
          <span>LUNARA</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-[#ffe180]">
            Home
          </a>
          <a href="#" className="hover:text-[#ffe180]">
            Welcome
          </a>
          <a href="#" className="hover:text-[#ffe180]">
            Best Sellers
          </a>
          <a href="#" className="hover:text-[#ffe180]">
            More
          </a>
        </nav>
        <span className="text-lg" aria-label="cart">
          🛒
        </span>
      </header>

      {/* Breadcrumbs */}
      <div className="text-gray-400 text-xs uppercase tracking-wider px-6 py-4">
        Home <span className="mx-1">&gt;</span> Shop{' '}
        <span className="mx-1">&gt;</span> Quantum Headset
      </div>

      {/* Product section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-10">
        {/* Main product image */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Swap image URL for real product */}
          <img
            src="https://source.unsplash.com/800x800?headphones"
            alt="Quantum Headset"
            className="rounded-xl shadow-2xl mb-4"
          />
          {/* Thumbnail gallery */}
          <div className="flex gap-2 overflow-x-auto">
            <img
              src="https://source.unsplash.com/100x100?headphones"
              alt="Thumb 1"
              className="w-20 h-20 rounded-md border border-[#ffe180]"
            />
            <img
              src="https://source.unsplash.com/100x100?music"
              alt="Thumb 2"
              className="w-20 h-20 rounded-md border border-gray-600"
            />
            <img
              src="https://source.unsplash.com/100x100?audio"
              alt="Thumb 3"
              className="w-20 h-20 rounded-md border border-gray-600"
            />
          </div>
        </div>

        {/* Details panel */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Futuristic Elegance</h1>
          <p className="text-2xl font-semibold text-[#ffe180] mb-6">$399</p>

          <label className="block text-sm text-gray-300 mb-1" htmlFor="color">
            Color
          </label>
          {/* Replace options with real colors */}
          <select
            id="color"
            className="mb-4 w-40 bg-transparent border border-gray-600 rounded-md px-3 py-2 focus:outline-none"
          >
            <option>Gold</option>
            <option>Silver</option>
          </select>

          <div className="flex items-center mb-4">
            <span className="mr-4 text-sm text-gray-300">Quantity</span>
            <div className="flex items-center border border-gray-600 rounded-full overflow-hidden">
              <button
                className="px-3 py-1 text-lg"
                onClick={decreaseQty}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={() => {}}
                className="w-12 text-center bg-transparent outline-none appearance-none"
              />
              <button
                className="px-3 py-1 text-lg"
                onClick={increaseQty}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button className="cta-button w-full">Add to Cart</button>
          <div className="flex items-center text-sm text-gray-400 mt-4">
            <span className="mr-2">🔒</span> Secure Checkout
          </div>
        </div>
      </main>

      {/* Features section */}
      <section className="mx-6 lg:mx-auto max-w-5xl bg-black/50 backdrop-blur rounded-xl p-8 my-12 text-left">
        <h2 className="font-serif text-2xl text-[#ffe180] mb-6">Features</h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-[#ffe180]">★</span>
            <div>
              <h3 className="font-semibold">Immersive Sound</h3>
              <p className="text-gray-300">
                Studio-quality audio engineered for the cosmos.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-[#ffe180]">★</span>
            <div>
              <h3 className="font-semibold">Adaptive Comfort</h3>
              <p className="text-gray-300">
                Lightweight materials for extended wear and luxury feel.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-[#ffe180]">★</span>
            <div>
              <h3 className="font-semibold">Quantum Connectivity</h3>
              <p className="text-gray-300">
                Next-generation wireless technology ensures seamless pairing.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Minimal footer */}
      <footer className="footer py-8 text-gray-400 text-sm bg-black">
        <div className="font-serif text-white text-lg mb-2">LUNARA</div>
        <div>contact@lunara.com &middot; +1 (555) 010-1234</div>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Shipping Policy
          </a>
          <a href="#" className="hover:text-white">
            T&amp;Cs
          </a>
          <a href="#" className="hover:text-white">
            Refund Policy
          </a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            TikTok
          </a>
        </div>
        <div className="mt-4">© LUNARA, All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default App;
