import React from 'react';
import './MainPage.css'; // Make sure to create this CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Updated import

function MainPage() {
  return (
    <div className="main-page">
      <div className="hero">
        <p className="hero-name">John Wick</p>
        <p className='intro'>In my hitman career, I've become a legendary figure,
            known for my unparalleled skills and icy demeanor.
            I operate in the shadows, executing missions with deadly
            precision and leaving no trace behind.My reputation strikes fear into the hearts of my enemies, and my resolve is unyielding.
In a world of contracts and danger, I am John Wick, a force to be reckoned with.</p>
        <img src="https://wallpapers.com/images/featured/john-wick-jeaidqurrfx52d3u.jpg" alt="John Wick" className="hero-image" />
        <div className="social-icons">
          <a href="https://www.youtube.com/watch?v=rlEYOcqiyLA&t=183s" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.instagram.com/johnwickmovie/" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/john-wick-468a7b287/" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
