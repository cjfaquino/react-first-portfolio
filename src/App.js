import React, { useState } from 'react';
import MyFooter from './component/MyFooter';
import MyProjects from './component/MyProjects';
import { Collapse } from 'react-collapse';
import { Link } from 'react-scroll';
import './App.css';

function App() {
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
        <MyProjects />
      </Collapse>
      <MyFooter />
    </div>
  );
}

export default App;
