import React from 'react';

export default function MyProjects() {
  return (
    <main id="projects" className="container">
      <div className="cards">
        <div>
          <img src="/imgs/tenshabu.png" alt="" />
          <span className="project-link">
            <a href="http://www.tenshabu.com" title="live">
              <i class="fas fa-globe"></i>
            </a>{' '}
            <a href="https://github.com/cjfaquino/tenshabu" title="source">
              <i class="fas fa-file-code"></i>
            </a>
          </span>
          <h3>Ten Shabu</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js, nginx</p>
        </div>
        <div>
          <img src="/imgs/tenshabu.png" alt="" />
          <span className="project-link">
            <a href="https://cjfaquino.com">
              <i class="fas fa-globe"></i>
            </a>{' '}
            <a href="https://github.com/cjfaquino/cjfaquino.github.io/tree/dev">
              <i class="fas fa-file-code"></i>
            </a>
          </span>
          <h3>Portfolio Page</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js</p>
        </div>
        <div>
          <img src="/imgs/tenshabu.png" alt="" />
          <span className="project-link">
            <a href="https://tenshabu.com">
              <i class="fas fa-globe"></i>
            </a>{' '}
            <a href="https://github.com/cjfaquino/yelpcamp">
              <i class="fas fa-file-code"></i>
            </a>
          </span>
          <h3>Yelp Camp</h3>
          <p>Description</p>
          <p className="subtext">Tech: mongoDB, node.js, express, passport</p>
        </div>
        <div>
          <img src="/imgs/tenshabu.png" alt="" />
          <span className="project-link">
            <a href="https://tenshabu.com">
              <i class="fas fa-globe"></i>
            </a>{' '}
            <a href="https://github.com/cjfaquino/forkify">
              <i class="fas fa-file-code"></i>
            </a>
          </span>
          <h3>Forkify</h3>
          <p>Description</p>
          <p className="subtext">Tech: js, webpack, babel</p>
        </div>
      </div>
    </main>
  );
}
