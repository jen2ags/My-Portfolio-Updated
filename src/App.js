import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Contact from './components/ContactInfo';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Work></Work>
      </main>
        <Contact></Contact>
    </div>  
    );
}

export default App;
