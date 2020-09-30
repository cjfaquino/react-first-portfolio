import React from 'react';
import Projectprops from './Projectprops';

export default function MyProjects() {
  return (
    <main id="projects" className="container">
      <Projectprops
        name="Ten Shabu"
        img="/imgs/tenshabu.png"
        tech="react.js, nginx, css"
        link="http://www.tenshabu.com"
        source="https://github.com/cjfaquno/tenshabu"
      />
      <Projectprops
        name="Portfolio"
        img="/imgs/portfolio.png"
        tech="react.js, css"
        link="https://cjfaquino.com"
        source="https://github.com/cjfaquino/cjfaquino.github.io/tree/dev"
      />
      <Projectprops
        name="YelpCamp"
        img="/imgs/yelpcamp.png"
        tech="mongoDB, node.js, express, passport, css"
        link="http://www.tenshabu.com"
        source="https://github.com/cjfaquno/yelpcamp"
      />
      <Projectprops
        name="Forkify"
        img="/imgs/forkify.png"
        tech="js, webpack, babel"
        link="https://cjfaquino.com/forkify"
        source="https://github.com/cjfaquno/forkify"
      />
    </main>
  );
}
