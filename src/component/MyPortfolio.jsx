import React from 'react';
// import Projectprops from './Projectprops';

const Projects = (props) => {
  return (
    <div className="item">
      <a href={props.link} alt={props.name}>
        <span className="hide">{props.name}</span>
      </a>
      <img src={props.img} alt="" />

      <div className="item__overlay">
        <h3>{props.name}</h3>
        <div className="item__body">
          <p>Tech: {props.tech}</p>
        </div>
      </div>
    </div>
  );
};

export default function MyPortfolio() {
  return (
    <main id="projects" className="container">
      <Projects
        name="Ten Shabu"
        img="/imgs/tenshabu.png"
        tech="react.js, nginx, css"
        link="http://www.tenshabu.com"
        source="https://github.com/cjfaquno/tenshabu"
      />
      <Projects
        name="Portfolio"
        img="/imgs/portfolio.png"
        tech="react.js, css"
        link="https://cjfaquino.com"
        source="https://github.com/cjfaquino/cjfaquino.github.io/tree/dev"
      />
      <Projects
        name="YelpCamp"
        img="/imgs/yelpcamp.png"
        tech="mongoDB, node.js, express, passport, css"
        link="https://yelpcamp-cjfaquino.wn.r.appspot.com/"
        source="https://github.com/cjfaquno/yelpcamp"
      />
      <Projects
        name="Forkify"
        img="/imgs/forkify.png"
        tech="js, webpack, babel"
        link="https://cjfaquino.com/forkify"
        source="https://github.com/cjfaquno/forkify"
      />
    </main>
  );
}
