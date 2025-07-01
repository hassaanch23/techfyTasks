import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CategorySection from './components/CategorySection.jsx';
import Home from './components/Home.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Footer from './components/Footer.jsx';
import CharacterCounter from './components/CharacterCounter.jsx';
import TaskTracker from './components/TaskTracker.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<CategorySection />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/footer" element={<Footer />} />

        <Route path="/counter" element={<CharacterCounter />} />
        <Route path="/tracker" element={<TaskTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
