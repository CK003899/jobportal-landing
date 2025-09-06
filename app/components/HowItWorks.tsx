// app/components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h2>How It Works</h2>
      <div className="grid">
        <article>
          <h3>Create Account</h3>
          <p>Sign up in seconds and build your professional profile.</p>
        </article>
        <article>
          <h3>Find Local Jobs</h3>
          <p>Search for jobs right here in India and nearby.</p>
        </article>
        <article>
          <h3>Apply & Get Hired</h3>
          <p>Connect directly with companies and land your next job.</p>
        </article>
      </div>
    </section>
  );
}