import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import '../HomePage/homepage.css';
import LearnSection from './learn';
import CourseMaterial from './coursematerial';
import Reviews from './reviews';

export default function CourseDetails() {
  return (
    <>
      <div className="course-detail-root">
        <div className="course-detail-inner">
          <div className="course-left">
            <div className="course-badge">Web development</div>
            <h1 className="course-title">Advanced Front-End Programming Techniques</h1>
            <div className="course-meta">
              <div>39 Assignments</div>
              <div>•</div>
              <div>Certificate of achievement</div>
              <div>•</div>
              <div>Life time access</div>
            </div>
            <p className="course-desc">
              Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
            </p>
            <div className="course-price">
              <div className="price">
                $599 <span className="old">$1299</span> <span className="pct">80% off</span>
              </div>
            </div>
            <div className="course-ctas">
              <Link to="/signup" className="btn btn-primary">
                Enroll Now
              </Link>
              <a className="btn btn-secondary" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className="promo-card">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="course"
              />
              <div className="card-body">
                <div className="badge">2023</div>
                <h3>The Full Stack React Course</h3>
                <p>Build & Deploy E-Learning App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LearnSection />
      <CourseMaterial />
      <Reviews />
    </>
  );
}
