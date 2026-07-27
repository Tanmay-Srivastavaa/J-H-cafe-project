import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Reviews({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);

  // Fetch reviews from the backend
  useEffect(() => {
    axios.get("http://localhost:3000/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  const handlePostReview = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("You must be logged in to post a review!");
      navigate("/login");
      return;
    }
    axios.post("http://localhost:3000/reviews", {
      user_id: currentUser.id,
      reviewer_name: currentUser.username,
      rating: rating,
      comment: newReview
    }).then(() => {
      alert("Review posted!");
      setNewReview("");
      axios.get("http://localhost:3000/reviews").then(res => setReviews(res.data));
    }).catch(err => console.error(err));
  };

  return (
    <div className="cafe-container page-min-height">
      
      {/* --- NAVBAR --- */}
      <nav className="cafe-navbar">
        <div className="nav-logo">J&H Cafe</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/reviews">Reviews</Link>
          {currentUser ? (
             <button onClick={() => setCurrentUser(null)} className="btn-call logout-btn">Logout</button>
          ) : (
            <Link to="/login"><button className="btn-call">Register / Login</button></Link>
          )}
        </div>
      </nav>

      {/* --- REVIEWS SECTION --- */}
      <section className="reviews-section standalone-page">
        <p className="section-subtitle">TRUSTED BY LOCALS</p>
        <h2 className="section-title">What People Say</h2>
        <div className="rating-summary">
          <span className="big-rating">4.2</span>
          <span className="stars-yellow">★★★★☆</span>
          <span>From 250+ Google Reviews</span>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="stars-yellow">{"★".repeat(rev.rating)}{"☆".repeat(5-rev.rating)}</div>
              <p className="review-comment">"{rev.comment}"</p>
              <h4 className="reviewer-name">— {rev.reviewer_name}</h4>
            </div>
          ))}
        </div>

        {/* --- REVIEW FORM --- */}
        <div className="post-review-box">
          <h3>Leave a Review</h3>
          <form onSubmit={handlePostReview}>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              <option value={5}>5 Stars - Excellent!</option>
              <option value={4}>4 Stars - Very Good</option>
              <option value={3}>3 Stars - Average</option>
              <option value={2}>2 Stars - Poor</option>
              <option value={1}>1 Star - Terrible</option>
            </select>
            <textarea 
              required
              placeholder="What did you think of the food and ambiance?" 
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows="4"
            ></textarea>
            <button type="submit" className="btn-solid w-full">Submit Review</button>
          </form>
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