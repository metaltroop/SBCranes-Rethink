import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import PlanYourLiftModal from './components/PlanYourLiftModal';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-steel-grey font-sans text-dark-slate antialiased selection:bg-safety-yellow selection:text-black">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/about" element={<PlaceholderPage />} />
          <Route path="/services" element={<PlaceholderPage />} />
          <Route path="/fleet" element={<PlaceholderPage />} />
          <Route path="/projects" element={<PlaceholderPage />} />
          <Route path="/careers" element={<PlaceholderPage />} />
          <Route path="/resources" element={<PlaceholderPage />} />
          <Route path="/contact" element={<PlaceholderPage />} />
        </Routes>
        <Footer />
        <FloatingCTA onOpenModal={() => setIsModalOpen(true)} />
        <PlanYourLiftModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
