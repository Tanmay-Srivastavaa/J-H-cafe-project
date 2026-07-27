import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ currentUser, setCurrentUser }) {
  const [activeTab, setActiveTab] = useState("All Items"); 

  return (
    <div className="cafe-container">
      
      {/* --- NAVBAR --- */}
      <nav className="cafe-navbar">
        <div className="nav-logo">J&H Cafe</div>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#dine-in">Dine In</a>
          
          {/* Change this to a Link to the new page */}
          <Link to="/reviews">Reviews</Link> 
          
          <a href="#contact">Contact</a>
          {currentUser ? (
             <button onClick={() => setCurrentUser(null)} className="btn-call logout-btn">Logout</button>
          ) : (
            <Link to="/login"><button className="btn-call">Register / Login</button></Link>
          )}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-location">CHARBAGH, LUCKNOW</p>
          <h1 className="hero-title">The J&H Cafe</h1>
          <h2 className="hero-hindi">ये जे&एच कैफे</h2>
          <p className="hero-desc">
            Authentic Grilled Sandwiches — Toasts — Chai — <br/>
            Made with love since day one.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn-outline">View Menu</a>
            <a href="#order" className="btn-solid">Order Now</a>
          </div>
          <p className="hero-pin">📍 Alambagh Marg, Charbagh, Lucknow</p>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="menu-section">
        <p className="section-subtitle">OUR SPECIALTIES</p>
        <h2 className="section-title">The Menu</h2>
        
        {/* Menu Tabs */}
        <div className="menu-tabs">
          {["All Items", "Grilled Sandwiches", "Grilled Toasts", "Beverages"].map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {(activeTab === "All Items" || activeTab === "Grilled Sandwiches") && (
            <div className="menu-category">
              <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80" alt="Sandwich" className="menu-img"/>
              <div className="menu-list">
                <h3>Grilled Sandwiches</h3>
                <div className="menu-item"><span>Classic Veg Grilled</span><span>₹60</span></div>
                <div className="menu-item"><span>Cheese Grilled Sandwich</span><span>₹80</span></div>
                <div className="menu-item"><span>Paneer Tikka Grilled</span><span>₹100</span></div>
                <div className="menu-item"><span>Corn & Cheese Grilled</span><span>₹90</span></div>
                <div className="menu-item"><span>Mushroom Cheese Grilled</span><span>₹110</span></div>
                <div className="menu-item"><span>Special J&H Grilled</span><span>₹130</span></div>
              </div>
            </div>
          )}

          {(activeTab === "All Items" || activeTab === "Grilled Toasts") && (
            <div className="menu-category">
              <img src="/grilled toast.jpg" alt="Grilled Toast" className="menu-img"/>
              <div className="menu-list">
                <h3>Grilled Toasts</h3>
                <div className="menu-item"><span>Butter Toast</span><span>₹30</span></div>
                <div className="menu-item"><span>Cheese Toast</span><span>₹50</span></div>
                <div className="menu-item"><span>Garlic Cheese Toast</span><span>₹60</span></div>
                <div className="menu-item"><span>Pizza Toast</span><span>₹70</span></div>
                <div className="menu-item"><span>Loaded Cheese Toast</span><span>₹90</span></div>
                <div className="menu-item"><span>J&H Special Toast</span><span>₹100</span></div>
              </div>
            </div>
          )}

          {(activeTab === "All Items" || activeTab === "Beverages") && (
            <div className="menu-category">
              <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80" alt="Chai" className="menu-img"/>
              <div className="menu-list">
                <h3>Beverages</h3>
                <div className="menu-item"><span>Masala Chai</span><span>₹20</span></div>
                <div className="menu-item"><span>Special Kulhad Chai</span><span>₹30</span></div>
                <div className="menu-item"><span>Green Tea</span><span>₹20</span></div>
                <div className="menu-item"><span>Lemon Tea</span><span>₹35</span></div>
                <div className="menu-item"><span>Cold Coffee</span><span>₹70</span></div>
                <div className="menu-item"><span>Hot Coffee</span><span>₹50</span></div>
              </div>
            </div>
          )}
        </div>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
               <button className="btn-solid center-btn">See Full Menu</button>
                </Link>      
              </section>

      {/* --- DINE WITH US SECTION --- */}
      <section id="dine-in" className="dine-in-section">
        <div className="dine-in-content">
          <div className="dine-in-image">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cafe Interior" />
          </div>
          <div className="dine-in-text">
            <p className="section-subtitle">THE EXPERIENCE</p>
            <h2 className="section-title left-align">Dine With Us</h2>
            <p className="dine-in-desc">
              Step into The J&H Cafe and feel the warmth of exposed brick walls, hanging greens, and the aroma of freshly grilled sandwiches. Whether it's a quick chai break or a long catch-up with friends, our cozy space is designed for every moment.
            </p>
            <div className="badges-grid">
              <span className="badge">📶 Free Wi-Fi</span>
              <span className="badge">❄️ AC Seating</span>
              <span className="badge">📸 Instagram-worthy</span>
              <span className="badge">👥 Group Friendly</span>
            </div>
          </div>
        </div>
      </section>


      {/* --- ORDER NOW SECTION --- */}
      <section id="order" className="order-section">
        <p className="section-subtitle">HUNGRY?</p>
        <h2 className="section-title">Order Now</h2>
        <p className="order-desc">Get your favorites delivered to your doorstep or call us for no-contact delivery.</p>
        <div className="order-grid">
          <div className="order-card">
            <div className="order-icon">🟧</div>
            <h3>Swiggy</h3>
            <p>Order via Swiggy</p>
          </div>
          <div className="order-card">
            <div className="order-icon">🟥</div>
            <h3>Zomato</h3>
            <p>Order via Zomato</p>
          </div>
          <div className="order-card">
            <div className="order-icon">🌐</div>
            <h3>Order Online</h3>
            <p>Direct from website</p>
          </div>
          <div className="order-card">
            <div className="order-icon">📞</div>
            <h3>Direct Call</h3>
            <p>No-contact Delivery</p>
          </div>
        </div>
      </section>

      {/* --- FIND US (CONTACT & MAP) --- */}
      <section id="contact" className="contact-section">
        <p className="section-subtitle">FIND US</p>
        <h2 className="section-title">Visit Us</h2>
        <div className="contact-layout">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14241.67084534139!2d80.9103986!3d26.8266205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a51c4b7b1%3A0x6e917d23d8c1c4f5!2sCharbagh%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Location Map"
            ></iframe>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>Alambagh Marg, Charbagh,<br/>Lucknow, Uttar Pradesh</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <h3>Hours</h3>
                <p>Mon - Sun: 8:00 AM - 11:00 PM</p>
                <span className="open-badge">• Open Now</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p className="phone-number">083185 15819</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>J&H Cafe</h2>
            <p>Serving the best grilled sandwiches, toasts, and authentic chai in Charbagh, Lucknow.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#order">Order Now</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Connect</h3>
            <p>Instagram • Facebook</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 J&H Cafe. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}