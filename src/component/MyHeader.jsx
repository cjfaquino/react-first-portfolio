import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';

export default function MyHeader(props) {
  const prjctLink = (
    <Link
      to={'projects'}
      spy={true}
      smooth={true}
      delay={100}
      duration={400}
      onClick={() => {
        props.setOpen(props.open);
      }}
    >
      Projects {''}
      <FontAwesomeIcon icon={faAngleDoubleDown} />
    </Link>
  );

  const prjctClose = props.open ? (
    prjctLink
  ) : (
    <button
      style={{ fontFamily: 'Montserrat', fontWeight: 800 }}
      onClick={() => {
        props.setOpen(props.open);
      }}
    >
      Projects {''}
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  );

  return (
    <header>
      <div className="jumbo container">
        <h1>Christian Aquino</h1>
        <h4>Web Design & Front End Development</h4>
        {prjctClose}
      </div>
    </header>
  );
}
