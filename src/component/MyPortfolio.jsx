import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import project from './projects.json';

export default function MyPortfolio(props) {
  const listItems = project.map((item) => (
    <div className="item" key={item.name}>
      <a href={item.link} alt={item.name}>
        <span className="hide">{item.name}</span>
      </a>
      {item.img ? <img src={item.img} alt="" /> : <img src="/imgs/source.jpg" alt="" />}
      <div className="item__overlay">
        <h3>{item.name}</h3>
        <div className="item__body">
          <p>Tech: {item.tech}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <main id="projects" className="container">
      {listItems}
      <FontAwesomeIcon
        className="projectsClose"
        icon={faAngleDoubleUp}
        onClick={() => {
          props.setOpen(props.open);
        }}
      />
    </main>
  );
}
