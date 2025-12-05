import React, { useState } from 'react'
import './homepage.css'

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
]

export default function FrequentlyAsked(){
  const [openIndex, setOpenIndex] = useState(null)

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
            <div className="faq-answer" style={{display: openIndex === i ? 'block' : 'none'}}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
