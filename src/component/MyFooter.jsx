import React from 'react';

export default function MyFooter() {
  return (
    <footer id="contact">
      <div className="container">
        <img src="/imgs/0.jpg" alt="" />
        <div className="info">
          <span>
            <i className="fas fa-address-card"></i> Los Angeles, CA
          </span>
          <a href="https://www.linkedin.com/in/cjfaquino/">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/cjfaquino">
            <i className="fab fa-github-square"></i> GitHub
          </a>
          <a href="mailto:cjfaquino@outlook.com">
            <i className="fas fa-envelope-square"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
