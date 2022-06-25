import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>

    </div>  
    );
}

export default App;
