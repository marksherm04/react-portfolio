import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  // page will auto start at the About section with useState
  const [currentLink, setCurrentLink] = useState("about");

  // checks to see what link is clicked and generates that page
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
      <div>
        <Header currentLink={currentLink} setCurrentLink={setCurrentLink}></Header>
      </div>
      <div>
        <main>{switchLink()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
