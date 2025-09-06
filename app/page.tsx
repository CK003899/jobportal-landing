// app/page.tsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import JobCategories from './components/JobCategories'; // <-- Add this import
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <HeroSection />
        <HowItWorks />
        <JobCategories /> {/* <-- Place the component here */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}