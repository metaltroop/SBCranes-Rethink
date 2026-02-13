import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


import Services from './pages/Services';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import SpecSheet from './pages/SpecSheet';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PlanYourLiftModal from './components/PlanYourLiftModal';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-clip bg-steel-grey font-sans text-dark-slate antialiased selection:bg-safety-yellow selection:text-black">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/specs" element={<SpecSheet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingCTA onOpenModal={() => setIsModalOpen(true)} />
        <PlanYourLiftModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
