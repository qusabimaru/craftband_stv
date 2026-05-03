import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Awards } from './components/Awards';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#080503' }}>
      <Header />
      <Hero />
      <Partners />
      <Awards />
      <About />
      <Catalog />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
