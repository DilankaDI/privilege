import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import WhatsAppWidget from './components/common/WhatsAppWidget';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <WhatsAppWidget />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;