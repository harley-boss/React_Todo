import React from 'react';
import './App.css';
import NavBar from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

// App() should really just act as a TOC and not have raw JSX

function App() {
  return (
    <div>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
