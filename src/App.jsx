import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';
import { Benefit, Blog, Collection, Footer, Hero, Navbar, Occassion, Reviews, Sellers, } from './Components';
import About from './Pages/About';
import Home from './Pages/Home';

const App = () => (
  <Router> {/* Wrap your entire application with the BrowserRouter */}
    <div>
      <div>
        <Home />
      </div>

      <Routes> {/* Define your routes */}
        <Route path="/about" element={<About />} /> {/* Define route for About component */}
      </Routes>
    </div>
  </Router>
);

export default App;
