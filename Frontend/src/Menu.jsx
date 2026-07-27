import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ currentUser, setCurrentUser }) {
  return (
    <div className="cafe-container page-min-height">
      
      {/* --- NAVBAR --- */}
      <nav className="cafe-navbar">
        <div className="nav-logo">J&H Cafe</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reviews">Reviews</Link>
          {currentUser ? (
             <button onClick={() => setCurrentUser(null)} className="btn-call logout-btn">Logout</button>
          ) : (
            <Link to="/login"><button className="btn-call">Register / Login</button></Link>
          )}
        </div>
      </nav>

      {/* --- FULL MENU SECTION --- */}
      <section className="menu-section standalone-page">
        <p className="section-subtitle">DISCOVER EVERYTHING</p>
        <h2 className="section-title">The Full Menu</h2>
        
        <div className="menu-grid">
          
          {/* Category 1 */}
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

          {/* Category 2 */}
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

          {/* Category 3 */}
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

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer mt-auto">
        <div className="footer-bottom">
          <p>&copy; 2026 J&H Cafe. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}