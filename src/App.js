import React from 'react';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Scene from './components/Scene';

// const slides = [
//   'https://i.ibb.co/ncrXc2V/1.png',
//   'https://i.ibb.co/B3s7v4h/2.png',
//   'https://i.ibb.co/XXR8kzF/3.png',
//   'https://i.ibb.co/yg7BSdM/4.png',
// ];

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Scene />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
