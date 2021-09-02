import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
