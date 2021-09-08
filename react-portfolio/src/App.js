import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Project from './components/Project';

function App() {
  // page will auto start at the About section with useState
  const [currentLink, setCurrentLink] = useState("about");

  const switchLink = () => {
    switch (currentLink) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

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
