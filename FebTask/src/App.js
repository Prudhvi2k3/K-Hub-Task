import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header'
import Head from './Head/Header'
import MainContent from './MainContent/Maincontent';
import PhaseComponent1 from './Table/Phase1'; // Import your phase components
import PhaseComponent2 from './Table/Phase2';
import PhaseComponent3 from './Table/Phase3';
import PhaseComponent4 from './Table/Phase4';
import PhaseComponent5 from './Table/Phase5';
import PhaseComponent6 from './Table/Phase6';

const App = () => {
  return (
    <><Head />
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/phase1" element={<PhaseComponent1 />} />
        <Route path="/phase2" element={<PhaseComponent2 />} />
        <Route path="/phase3" element={<PhaseComponent3 />} />
        <Route path="/phase4" element={<PhaseComponent4 />} />
        <Route path="/phase5" element={<PhaseComponent5 />} />
        <Route path="/phase6" element={<PhaseComponent6 />} />
      </Routes>
    </Router>
    <div className="footer" style={{ backgroundColor: 'black',padding:"26px" }}>Footer</div>
    </>
  );
};

export default App;
