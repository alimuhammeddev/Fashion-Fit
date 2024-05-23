import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import OurStory from './Pages/OurStory';

const App = () => (
  <Router>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/our-story" element={<OurStory />} />
    </Routes>
  </div>
  </Router>
);

export default App;
