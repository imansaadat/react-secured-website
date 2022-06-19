import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CouldPage, RecoveryPage, ContactPage, Navbar, Footer } from './components'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud" element={<CouldPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
