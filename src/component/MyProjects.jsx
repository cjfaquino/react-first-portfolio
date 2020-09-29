import React from 'react';

export default function MyProjects() {
  return (
    <main id="projects" className="container">
      <div className="cards">
        <div>
          <img src="/imgs/tenshabu.png" alt="" />
          <a href="http://www.tenshabu.com">
            <span className="project-link" title="live">
              <i className="fas fa-globe"></i>
            </span>
          </a>
          <a href="https://github.com/cjfaquino/tenshabu">
            <span className="project-link" title="source">
              <i className="fas fa-file-code"></i>
            </span>
          </a>
          <h3>Ten Shabu</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js, nginx, css</p>
        </div>
        <div>
          <img src="/imgs/portfolio.png" alt="" />
          <a href="https://cjfaquino.com">
            <span className="project-link" title="live">
              <i className="fas fa-globe"></i>
            </span>
          </a>
          <a href="https://github.com/cjfaquino/cjfaquino.github.io/tree/dev">
            <span className="project-link" title="source">
              <i className="fas fa-file-code"></i>
            </span>
          </a>
          <h3>Portfolio Page</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js, css</p>
        </div>
        <div>
          <img src="/imgs/yelpcamp.png" alt="" />
          <a href="https://tenshabu.com" title="live">
            <span className="project-link">
              <i className="fas fa-globe"></i>
            </span>
          </a>
          <a href="https://github.com/cjfaquino/yelpcamp">
            <span className="project-link" title="source">
              <i className="fas fa-file-code"></i>
            </span>
          </a>
          <h3>Yelp Camp</h3>
          <p>Description</p>
          <p className="subtext">Tech: mongoDB, node.js, express, passport, css</p>
        </div>
        <div>
          <img src="/imgs/forkify.png" alt="" />
          <a href="https://cjfaquino.com/forkify" title="live">
            <span className="project-link">
              <i className="fas fa-globe"></i>
            </span>
          </a>
          <a href="https://github.com/cjfaquino/forkify">
            <span className="project-link" title="source">
              <i className="fas fa-file-code"></i>
            </span>
          </a>
          <h3>Forkify</h3>
          <p>Description</p>
          <p className="subtext">Tech: js, webpack, babel</p>
        </div>
      </div>
    </main>
  );
}
