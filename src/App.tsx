
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import EquipmentSelector from './components/EquipmentSelector';
import ProjectGallery from './components/ProjectGallery';
import TrustBanner from './components/TrustBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-steel-grey font-sans text-dark-slate antialiased selection:bg-safety-yellow selection:text-black">
      <Hero />
      <StatsStrip />
      <EquipmentSelector />
      <ProjectGallery />
      <TrustBanner />
      <Footer />
    </div>
  );
}

export default App;
