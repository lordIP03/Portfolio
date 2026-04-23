import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import PremiumTools from './components/PremiumTools';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <div className="twilight-bg"></div>
      
      <div className="page-layout">
        {/* Left Fixed Sidebar */}
        <div className="sidebar-container">
          <Sidebar />
        </div>

        {/* Right Scrolling Content */}
        <main className="main-content">
          <Hero />
          <Projects />
          <Experience />
          <PremiumTools />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
