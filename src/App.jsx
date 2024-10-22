import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound'; // Import your NotFound component
import './App.css'; // Import your custom styles

function App() {
  return (
    <div>
      <Header />
      <main className='flex-shrink-0'>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
