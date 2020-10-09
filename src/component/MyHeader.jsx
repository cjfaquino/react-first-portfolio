import React from 'react';
import { Link } from 'react-scroll';

export default function MyHeader(props) {
  return (
    <header>
      <div className="jumbo container">
        <h1>Christian Aquino</h1>
        <h4>Web Design & Front End Development</h4>
        <Link
          to={props.open ? 'projects' : ''}
          spy={true}
          smooth={true}
          delay={100}
          duration={700}
          onClick={() => {
            props.setOpen(props.open);
          }}
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
