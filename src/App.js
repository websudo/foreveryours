import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel'
import Feature from "./Components/Feature"
import About from "./Components/About"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Feature />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
