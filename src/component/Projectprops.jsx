import React from 'react';

export default function Projectprop(props) {
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
}
