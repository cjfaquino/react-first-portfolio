import React, { useState } from 'react';
import MyFooter from './component/MyFooter';
import MyPortfolio from './component/MyPortfolio';
import MyHeader from './component/MyHeader';
import { Collapse } from 'react-collapse';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <MyHeader open={!open} setOpen={setOpen} />
      <Collapse isOpened={open}>
        <MyPortfolio />
      </Collapse>
      <MyFooter />
    </div>
  );
}
