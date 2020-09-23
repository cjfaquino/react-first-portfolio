import React from 'react';
import tenshabu from './tenshabu.gif';

export default function MyProjects() {
  return (
    <main id="projects" className="container">
      <h2>Projects</h2>
      <div className="cards">
        <div>
          <img src={tenshabu} alt="" />
          <span className="project-link">
            <a href="http://www.tenshabu.com">live</a> <a href="https://github.com/cjfaquino/tenshabu">source</a>
          </span>
          <h3>Ten Shabu</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js, nginx</p>
        </div>
        <div>
          <img src={tenshabu} alt="" />
          <span className="project-link">
            <a href="https://cjfaquino.com">live</a>{' '}
            <a href="https://github.com/cjfaquino/cjfaquino.github.io/tree/dev">source</a>
          </span>
          <h3>Portfolio Page</h3>
          <p>Description</p>
          <p className="subtext">Tech: react.js</p>
        </div>
        <div>
          <img src={tenshabu} alt="" />
          <span className="project-link">
            <a href="https://tenshabu.com">live</a> <a href="https://github.com/cjfaquino/yelpcamp">source</a>
          </span>
          <h3>Yelp Camp</h3>
          <p>Description</p>
          <p className="subtext">Tech: mongoDB, node.js, express, passport</p>
        </div>
        <div>
          <img src={tenshabu} alt="" />
          <span className="project-link">
            <a href="https://tenshabu.com">live</a> <a href="https://github.com/cjfaquino/forkify">source</a>
          </span>
          <h3>Forkify</h3>
          <p>Description</p>
          <p className="subtext">Tech: js, webpack, babel</p>
        </div>
      </div>
    </main>
  );
}
