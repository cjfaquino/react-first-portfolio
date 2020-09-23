import React, { useState } from 'react';
import MyHeader from './component/MyHeader';
import MyFooter from './component/MyFooter';
import MyProjects from './component/MyProjects';
import { Collapse } from 'react-collapse';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <MyHeader />
      <nav>
        <div className="container">
          <button onClick={() => setOpen(!open)}>Projects</button>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Collapse isOpened={open}>
        <MyProjects />
      </Collapse>
      <MyFooter />
    </div>
  );
}

export default App;
