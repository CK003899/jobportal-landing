// app/components/CtaSection.tsx

export default function CtaSection() {
  return (
    // We add a little inline style for a background to make it stand out.
    <section style={{ 
      textAlign: 'center', 
      padding: '4rem 1rem', 
      backgroundColor: '#f8f9fa', // A light background color
      borderRadius: 'var(--pico-border-radius)' 
    }}>
      <h2>Ready to Get Started?</h2>
      <p>Be the first to know when we launch in India.</p>
      <a href="#" role="button" style={{ fontSize: '1.1rem', maxWidth: '300px', margin: '0 auto' }}>
        Notify Me!
      </a>
    </section>
  );
}