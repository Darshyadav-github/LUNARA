import './App.css';

function App() {
  return (
    <div className="app">
      {/* Sticky navigation bar */}
      <header className="navbar">
        <span className="logo">{/* Replace with brand logo if available */}LUNARA</span>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Welcome</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </nav>
        <span className="cart-icon" aria-label="cart">🛒</span>
      </header>

      {/* Hero section */}
      <section className="hero">
        <h1>Futuristic Elegance</h1>
        <p>
          Explore celestial-grade electronics designed for a new dimension of
          living.
        </p>
        <a href="#" className="cta-button">Shop Now</a>
      </section>

      {/* Top Picks showcase */}
      <section className="top-picks">
        <h2>Top Picks</h2>
        <div className="product-grid">
          <div className="product-card">
            {/* Placeholder product image */}
            <img src="https://source.unsplash.com/random/400x400?headphones" alt="Product 1" />
            <h3>Quantum Headset</h3>
            <p className="price">$299</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/random/400x400?smartwatch" alt="Product 2" />
            <h3>Astro Smartwatch</h3>
            <p className="price">$499</p>
          </div>
          <div className="product-card">
            <img src="https://source.unsplash.com/random/400x400?speaker" alt="Product 3" />
            <h3>Galaxy Speaker</h3>
            <p className="price">$399</p>
          </div>
        </div>
      </section>

      {/* Luxury sale banner */}
      <section className="sale-banner">
        <h2>Exclusive Seasonal Sale</h2>
        <p>
          Enjoy exclusive discounts on LUNARA’s most coveted electronics. Limited
          time only.
        </p>
        <a href="#" className="cta-button">Grab Now</a>
      </section>

      {/* Minimal footer */}
      <footer className="footer">
        <div className="footer-logo">LUNARA</div>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">T&amp;Cs</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
        <address>
          contact@lunara.com<br />+1 (555) 010-1234
        </address>
        <ul className="social-links">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
