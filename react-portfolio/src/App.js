import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Project from './components/Project';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <About></About>
      </main>
    </div>
  );
}

export default App;
