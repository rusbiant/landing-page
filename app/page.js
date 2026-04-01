import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Features />
      </main>
      <Footer />
    </>
  );
}
