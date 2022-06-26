import React from 'react';
import About from './components/About';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
        <Footer></Footer>
    </div>  
    
    );
}

export default App;
