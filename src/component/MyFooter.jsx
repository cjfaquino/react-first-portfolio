import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faStreetView } from '@fortawesome/free-solid-svg-icons';

export default function MyFooter() {
  return (
    <footer id="contact">
      <div className="container">
        <img src="/imgs/0.jpg" alt="" />
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faStreetView} /> Los Angeles, CA
          </span>
          <a href="https://www.linkedin.com/in/cjfaquino/">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://github.com/cjfaquino">
            <FontAwesomeIcon icon={faGithubSquare} /> GitHub
          </a>
          <a href="mailto:cjfaquino@outlook.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
