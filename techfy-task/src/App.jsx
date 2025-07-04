import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SinglePage from './components/SinglePage';
import TaskTracker from './components/TaskTracker';
import CharacterCounter from './components/CharacterCounter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/tracker" element={<TaskTracker />} />
        <Route path="/counter" element={<CharacterCounter />} />
      </Routes>
    </Router>
  );
}

export default App;
