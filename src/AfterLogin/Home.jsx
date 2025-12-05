import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/AfterLoginNavbar';
import dsIcon from './image/datascience.svg';
import mbaIcon from './image/mba.svg';
import aiIcon from './image/ai.svg';
import codeIcon from './image/code.svg';
import homestudent from '../HomePage/image/homestudent.png';

// TrendingCard Component
const TrendingCard = ({ image, altImage, title, author, time, price, oldPrice, rating, reviews, badge, link }) => {
    const [src, setSrc] = useState(image);
    return (
        <div className="card-frame">
            <div
                className="trending-card"
                onMouseEnter={() => altImage && setSrc(altImage)}
                onMouseLeave={() => setSrc(image)}
            >
                <div className="card-image">
                    <img src={src} alt={title} />
                </div>
                <div className="card-body">
                    <h4>{link ? <Link to={link} className="course-link">{title}</Link> : title}</h4>
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
    );
};

// CourseCard Component
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
    );
};

// Intrests Component
const Intrests = () => {
    return (
        <>
            <section className="categories">
                <h4>Choose Your <span className="accent">Area Of Interest</span></h4>
                <div className="categories-grid">
                    <div className="category-card">
                        <div className="cat-left">
                            <div className="cat-title">Data Science</div>
                            <a className="cat-sub" href="#">7 Courses</a>
                        </div>
                        <div className="cat-icon"><img src={dsIcon} alt="Data Science" /></div>
                    </div>
                    <div className="category-card">
                        <div className="cat-left">
                            <div className="cat-title">MBA Course</div>
                            <a className="cat-sub" href="#">11 Courses</a>
                        </div>
                        <div className="cat-icon"><img src={mbaIcon} alt="MBA" /></div>
                    </div>
                    <div className="category-card">
                        <div className="cat-left">
                            <div className="cat-title">AI & ML</div>
                            <a className="cat-sub" href="#">10 Courses</a>
                        </div>
                        <div className="cat-icon"><img src={aiIcon} alt="AI & ML" /></div>
                    </div>
                    <div className="category-card">
                        <div className="cat-left">
                            <div className="cat-title">Software & Tech</div>
                            <a className="cat-sub" href="#">42 Courses</a>
                        </div>
                        <div className="cat-icon"><img src={codeIcon} alt="Software & Tech" /></div>
                    </div>
                </div>
            </section>
            <section className="promo-banner">
                <svg className="promo-wave" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
                    <path d="M0,40 C200,120 400,0 600,60 C800,120 1000,40 1200,80 L1200,200 L0,200 Z" fill="#0b61ff" opacity="0.14" />
                    <path d="M0,80 C200,10 400,140 600,80 C800,20 1000,100 1200,60 L1200,200 L0,200 Z" fill="#ffffff" opacity="0.06" />
                </svg>
                <div className="promo-content">
                    <h2><span className="promo-big">25% OFF*</span></h2>
                    <h3 className="promo-title">Today's Special</h3>
                    <p className="promo-sub">Get a Discount for Every Course Order only Valid for Today.!</p>
                </div>
                <div className="promo-dots" aria-hidden>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot active" />
                </div>
            </section>
        </>
    );
};

// Topcourses Component
const Topcourses = () => {
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
    ];
    return (
        <section className="trending" style={{ marginTop: 32 }}>
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
    );
};

// LearnerBenifits Component
const LearnerBenifits = () => {
    return (
        <section className="learner-section">
            <h3 className="learner-heading">Learner Benefits</h3>
            <div className="benefits-container">
                <div className="benefits-box">
                    <div className="benefits-left">
                        <h4>World Class Pedagogy</h4>
                        <ul>
                            <li>Learn from the World's Best Faculty & Industry Experts</li>
                            <li>Learn with fun Hands-on Exercises & Assignments</li>
                            <li>Participate in Hackathons & Group Activities</li>
                        </ul>
                    </div>
                    <div className="benefits-right">
                        <div className="small-card">
                            <div className="small-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ff8a00" />
                                </svg>
                            </div>
                            <div className="small-text">4.8/5 Rating</div>
                        </div>
                        <div className="small-card">
                            <div className="small-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10h-3V6a2 2 0 0 0-2-2h-2v2h2v4H7V6h2V4H7a2 2 0 0 0-2 2v4H2v2h3v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4h3v-2z" fill="#ff8a00" />
                                </svg>
                            </div>
                            <div className="small-text">Gamified Learning</div>
                        </div>
                    </div>
                </div>
                <div className="benefits-pager">
                    <span className="pager-dot active" />
                    <span className="pager-dot" />
                    <span className="pager-dot" />
                </div>
                <div className="testimonials">
                    <div className="testimonial-card">
                        <div className="t-meta">
                            <img className="t-avatar-img" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" alt="John" />
                            <div>
                                <div className="t-name">John Doe</div>
                                <div className="t-role">Acme Solutions</div>
                            </div>
                        </div>
                        <div className="t-stars">★★★★★</div>
                        <p className="t-text">I completed the GCP Course. It helped me change my career path to DevOps and Cloud. Within 6 months, I secured the Associate Cloud Engineer Certificate, which helped me get a job at Qwinix.</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="t-meta">
                            <img className="t-avatar-img" src="https://images.unsplash.com/photo-1545996124-1b9b8f6b6b60?w=80&q=80" alt="Jane" />
                            <div>
                                <div className="t-name">Jane Watson</div>
                                <div className="t-role">Beta Innovations</div>
                            </div>
                        </div>
                        <div className="t-stars">★★★★★</div>
                        <p className="t-text">I am a Software Engineer at Accenture. I had good knowledge of SQL server development but wanted to change my career to Data science. I enrolled in the Data Science course and ...</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="t-meta">
                            <img className="t-avatar-img" src="https://images.unsplash.com/photo-1545996124-1b9b8f6b6b60?w=80&q=80" alt="Robert" />
                            <div>
                                <div className="t-name">Robert Winger</div>
                                <div className="t-role">Tech Innovations</div>
                            </div>
                        </div>
                        <div className="t-stars">★★★★★</div>
                        <p className="t-text">I was an Associate at Capgemini but due to some issues, I had to drop. Then, I started learning Data Science during the lockdown which helped me build strong foundations and exposure to real projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// FrequentlyAsked Component
const FrequentlyAsked = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: 'What is LearnPro?', a: 'LearnPro is an online learning platform offering curated courses across tech, business, and creative fields.' },
        { q: 'How do I redeem the Lifetime Deal?', a: 'Visit the promotions page, copy the code and apply it at checkout. The discount will reflect immediately.' },
        { q: 'How can I find courses that suit my interests?', a: 'Use the search bar, browse categories or check our Trending and Top New Courses sections to find relevant content.' },
        { q: 'Are there any discounts available?', a: 'We regularly run promotions and bundles — check the homepage banners or subscribe to our newsletter for alerts.' },
        { q: 'What are Trending and Top New Courses?', a: 'Trending courses are popular enrollments right now. Top New Courses are recently published, highly-rated additions.' },
        { q: 'Can I trust the course quality?', a: 'All courses are reviewed and rated by learners; top-rated instructors have verified credentials.' },
        { q: 'How do I download the mobile app?', a: 'Visit the App Store (iOS) or Google Play (Android) and search for "LearnPro" to download the app.' },
        { q: 'Where can I contact support?', a: 'Use the Contact link in the footer or open the chat widget for quick help from our support team.' },
        { q: 'Is there a certificate after course completion?', a: 'Yes — most courses include a completion certificate which you can download from your profile.' }
    ];
    return (
        <section className="faq-section">
            <h3 className="faq-heading">Frequently Asked Questions (FAQ)</h3>
            <div className="faq-container">
                {faqs.map((item, i) => (
                    <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                        <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                            <span>{item.q}</span>
                            <span className="chev">{openIndex === i ? '▴' : '▾'}</span>
                        </button>
                        <div className="faq-answer" style={{ display: openIndex === i ? 'block' : 'none' }}>
                            <p>{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">What We Offer</a></li>
                            <li><a href="#">Leadership</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Terms</h4>
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-badges">
                    <a className="store-badge appstore" href="#" aria-label="Download on the App Store">
                        <span className="store-icon"></span>
                        <span className="store-text">
                            <small>Download on the</small>
                            <strong>App Store</strong>
                        </span>
                    </a>
                    <a className="store-badge playstore" href="#" aria-label="Get it on Google Play">
                        <span className="store-icon">▶</span>
                        <span className="store-text">
                            <small>GET IT ON</small>
                            <strong>Google Play</strong>
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

// Home Component
const Home = () => {
    return (
        <div className="homepage-root">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Get Lifetime <span className="accent">Deal</span>
                    </h1>
                    <p className="hero-sub">Access to all on-demand courses</p>
                    <button className="cta">Redeem Now</button>
                </div>
                <div className="hero-image">
                    <img src={homestudent} alt="student" />
                </div>
            </section>
            <section className="trending">
                <div className="section-header">
                    <h3>Trending Courses</h3>
                    <a className="all-courses" href="#">All Courses ›</a>
                </div>
                <div className="trending-grid">
                    <TrendingCard
                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                        altImage="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
                        title="Advanced Front-End Programming Techniques"
                        link="/courses/advanced-frontend"
                        author="Julia Anatole"
                        time="1 hr"
                        price="12.99"
                        oldPrice="36"
                        rating="4.5"
                        reviews="2,980"
                        badge="Top Author"
                    />
                    <TrendingCard
                        image="https://images.unsplash.com/photo-1532614431035-c5a0b1d0b7b4?auto=format&fit=crop&w=800&q=80"
                        altImage="https://images.unsplash.com/photo-1508385082359-fc77a9b1a019?auto=format&fit=crop&w=800&q=80"
                        title="Ultimate Cybersecurity Fundamental for Beginners"
                        author="Jacob Jones"
                        time="3:30 hr"
                        price="12.99"
                        oldPrice="36"
                        rating="4.5"
                        reviews="2,980"
                        badge="Editor's Choice"
                    />
                    <TrendingCard
                        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                        altImage="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
                        title="Digital User Experience Design Essentials"
                        author="Cody Fisher"
                        time="2 hr"
                        price="10.99"
                        oldPrice="32"
                        rating="4.5"
                        reviews="2,980"
                        badge="Top Author"
                    />
                    <TrendingCard
                        image="https://images.unsplash.com/photo-1531497865144-0463e7b1b6d7?auto=format&fit=crop&w=800&q=80"
                        altImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                        title="Artificial Intelligence with Python"
                        author="Jenny Wilson"
                        time="1:30 hr"
                        price="10.99"
                        oldPrice="32"
                        rating="4.5"
                        reviews="2,980"
                        badge="Editor's Choice"
                    />
                </div>
            </section>
            <Intrests />
            <Topcourses />
            <LearnerBenifits />
            <FrequentlyAsked />
            <Footer />
        </div>
    );
};

export default Home;
