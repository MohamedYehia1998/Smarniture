import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/FAQ/FAQ';
import PageFooter from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Contact />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Container>
    <PageFooter />
  </>
);

export default App;