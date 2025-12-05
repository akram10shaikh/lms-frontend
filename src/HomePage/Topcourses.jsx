import React from 'react'
import './homepage.css'

const CourseCard = ({ image, title, author, time, price, oldPrice, rating, reviews, badge }) => {
  return (
    <div className="card-frame">
      <div className="trending-card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-body">
          <h4>{title}</h4>
          <div className="card-meta">{author} · {time}</div>

          <hr className="card-divider" />

          <div className="card-bottom">
            <div className="price-block">
              <span className="price">${price}</span>
              {oldPrice && <span className="old-price">${oldPrice}</span>}
            </div>

            <div className="rating">⭐ {rating} <span className="reviews">({reviews})</span></div>
          </div>

          {badge && <div className="badge">{badge}</div>}
        </div>
      </div>
    </div>
  )
}

export default function Topcourses(){
  const courses = [
    {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      title: 'Introduction to Photography and Editing',
      author: 'Eleanor Pena',
      time: '3 hr',
      price: '10.99',
      oldPrice: '32',
      rating: '4.5',
      reviews: '2,980',
      badge: 'Bestseller'
    },
    {
      image: 'https://images.unsplash.com/photo-1515165562835-c0ee6a0f03c2?auto=format&fit=crop&w=800&q=80',
      title: 'Mastering Public Speaking and Presentation',
      author: 'Devon Lane',
      time: '1 hr',
      price: '12.99',
      oldPrice: '34',
      rating: '4.5',
      reviews: '2,980',
      badge: 'Top Author'
    },
    {
      image: 'https://images.unsplash.com/photo-1529692236671-f1f1b8f2c1a7?auto=format&fit=crop&w=800&q=80',
      title: 'Cooking Gourmet Meals at Home',
      author: 'Cameron Williamson',
      time: '2 hr',
      price: '10.99',
      oldPrice: '32',
      rating: '4.5',
      reviews: '2,980',
      badge: "Editor's Choice"
    },
    {
      image: 'https://images.unsplash.com/photo-1541745537415-8a0b6504d4b1?auto=format&fit=crop&w=800&q=80',
      title: 'Personal Finance Management Essentials',
      author: 'Arlene McCoy',
      time: '30 m',
      price: '10.99',
      oldPrice: '32',
      rating: '4.5',
      reviews: '2,980',
      badge: 'Bestseller'
    }
  ]

  return (
    <section className="trending" style={{marginTop:32}}>
      <div className="section-header">
        <h3>Top New Courses</h3>
        <a className="all-courses" href="#">All Courses ›</a>
      </div>

      <div className="trending-grid">
        {courses.map((c, i) => (
          <CourseCard key={i} {...c} />
        ))}
      </div>
    </section>
  )
}
