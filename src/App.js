import React from 'react';
import About from './components/About';
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
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>

        <Footer></Footer>
    </div>  
    
    );
}

export default App;
