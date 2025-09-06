// app/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>Find Your Next Skilled Trade Job</h1>
      <p>The #1 platform in Chennai for electricians, plumbers, drivers, and technicians.</p>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
        
        {/* The fix is here: I'm is now I&apos;m */}
        <a href="#" role="button" style={{ fontSize: '1.1rem' }}>I&apos;m a Job Seeker</a>
        <a href="#" role="button" className="secondary" style={{ fontSize: '1.1rem' }}>I&apos;m an Employer</a>

      </div>
    </section>
  );
}