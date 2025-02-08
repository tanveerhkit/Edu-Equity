import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Verification } from './pages/Verification';
import { VerificationProcess } from './pages/VerificationProcess';
import { Apply } from './pages/Apply';
import { Stories } from './pages/Stories';
import { SubmitStory } from './pages/SubmitStory';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verification-process" element={<VerificationProcess />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/submit-story" element={<SubmitStory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;