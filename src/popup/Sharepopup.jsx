import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Sharepopup.css';

const shareChannels = [
  { label: 'LinkedIn', icon: faLinkedin },
  { label: 'Email', icon: faEnvelope },
  { label: 'WhatsApp', icon: faWhatsapp },
  { label: 'Facebook', icon: faFacebook },
  { label: 'X', icon: faXmark }
];

const Sharepopup = () => {
  const url = 'https://learnpro.com/courses/web-development';

  return (
    <div className="share-popup-card">
      <div className="share-heading">
        <h3>Share this page</h3>
        <p>Show your friends what they can learn on LearnPro</p>
      </div>
      <div className="share-row">
        {shareChannels.map((channel) => (
          <div key={channel.label} className="share-icon-wrapper">
            <div className="share-icon">
              <FontAwesomeIcon icon={channel.icon} />
            </div>
            <span>{channel.label}</span>
          </div>
        ))}
      </div>
      <div className="share-link-block">
        <span className="share-url">{url}</span>
        <button className="share-copy-btn">Copy</button>
      </div>
    </div>
  );
};

export default Sharepopup;
