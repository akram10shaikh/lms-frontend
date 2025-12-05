import React from 'react';
import PropTypes from 'prop-types';
import './homepage.css';

function ReviewItem({ avatarColor = '#e6eefc', name = 'Name', date = '16 Feb 2024', rating = 4.5, text }) {
  return (
    <div className="review-item">
      <div>
        <div
          className="r-avatar"
          style={{ background: avatarColor }}
          aria-label={`${name}'s avatar`}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div className="r-head">
          <div>
            <strong>{name}</strong>
          </div>
          <div className="r-meta">
            <span className="r-stars">
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(rating) ? '★' : '☆'
              ).join('')}
            </span>
            <span className="r-date">{date}</span>
          </div>
        </div>
        <div className="r-text">{text}</div>
      </div>
    </div>
  );
}

ReviewItem.propTypes = {
  avatarColor: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string.isRequired,
};

function AuthorCard() {
  return (
    <div className="author-card">
      <div className="ac-avatar" aria-label="Author's avatar" />
      <div style={{ flex: 1 }}>
        <div className="ac-name">Julia Anatole</div>
        <div className="ac-sub">Harvard Business School</div>
        <div className="ac-rating">4.5 (39)</div>
        <div className="ac-bio">
          I'm Julia, a developer passionate about teaching. As the lead instructor, I've helped many students and taught at top companies worldwide.
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  // Inline responsive grid style
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '18px',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 320px',
    },
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-inner">
        <h3 className="section-title">Reviews</h3>
        <div style={gridStyle}>
          <div className="reviews-list">
            <ReviewItem
              name="John Doe"
              avatarColor="#e9eef6"
              date="16 Feb 2024"
              rating={5}
              text="Insightful course with practical examples and clear explanations. Perfect for developers!"
            />
            <hr className="reviews-sep" />
            <ReviewItem
              name="Jane Smith"
              avatarColor="#dff3ea"
              date="16 Feb 2024"
              rating={5}
              text="I wish Muhammad Shahin was my class teacher. His teaching technique is awesome."
            />
          </div>
          <div>
            <h3 className="section-title">About Author</h3>
            <AuthorCard />
          </div>
        </div>
      </div>
    </section>
  );
}
