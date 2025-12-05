import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '40px 60px',
        backgroundColor: '#fff',
        fontFamily: "'Inter', sans-serif",
        flexWrap: 'wrap',
        borderTop: '1px solid #e5e7eb',
        gap: '80px',
      }}
    >
      <div
        className="footer-columns"
        style={{
          display: 'flex',
          gap: '60px',
        }}
      >
        <div className="footer-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginRight: '30px' }}>
          <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#111827' }}>About</h5>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>What We Offer</p>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>Leadership</p>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>Careers</p>
        </div>
        <div className="footer-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginRight: '30px' }}>
          <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#111827' }}>Terms</h5>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>Privacy</p>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>Help Center</p>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '6px 0', cursor: 'pointer' }}>Contact</p>
        </div>
        <div className="footer-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', marginRight: '30px' }}>
          <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#111827' }}>Follow Us</h5>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Facebook</a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Twitter</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>LinkedIn</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>YouTube</a>
        </div>
      </div>
      <div
        className="footer-store"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          style={{
            width: '140px',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          style={{
            width: '140px',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    </footer>
  );
}