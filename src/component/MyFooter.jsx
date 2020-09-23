import React from 'react';

export default function MyFooter() {
  return (
    <footer id="contact">
      <div className="container">
        <img src="/imgs/0.jpg" alt="" />
        <div className="info">
          <a href="mailto:cjfaquino@outlook.com">
            <i class="fas fa-envelope-square"></i> Email
          </a>
          <a href="https://github.com/cjfaquino">
            <i class="fab fa-github-square"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/cjfaquino/">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
