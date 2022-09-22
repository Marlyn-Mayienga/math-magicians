/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
// import 'src/index.css';

const App = () => (
  <Router>
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<Quote />} />
        </Routes>
      </div>
      <Footer />
    </main>
  </Router>
);

export default App;
