import React from 'react';
import MyNav from './component/MyNav';
import MyHeader from './component/MyHeader';
import MyFooter from './component/MyFooter';
import MyProjects from './component/MyProjects';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyNav />
      <MyProjects />
      <MyFooter />
    </div>
  );
}

export default App;
