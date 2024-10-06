import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'; // Make sure Tailwind CSS is imported

function App() {
  return (
    <div>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Background/Background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
