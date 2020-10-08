import React, { useState } from 'react';
import MyFooter from './component/MyFooter';
import MyPortfolio from './component/MyPortfolio';
import { Collapse } from 'react-collapse';
import { Link } from 'react-scroll';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="jumbo container">
          <h1>Christian Aquino</h1>
          <h4>Web Design & Front End Development</h4>
          <Link to="projects" spy={true} smooth={true} duration={500} onClick={() => setOpen(!open)}>
            Projects
          </Link>
        </div>
      </header>

      <Collapse isOpened={open}>
        <MyPortfolio />
      </Collapse>
      <MyFooter />
    </div>
  );
}
