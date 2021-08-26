import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <Contact></Contact>
      </main>

    </div>
  );
}

export default App;
