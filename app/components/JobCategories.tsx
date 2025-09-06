// app/components/JobCategories.tsx

// A list of our target job categories
const categories = [
  { name: "Construction & Maintenance", count: "150+ Jobs Available" },
  { name: "Transportation & Logistics", count: "200+ Jobs Available" },
  { name: "Manufacturing & Factory", count: "95+ Jobs Available" },
  { name: "Skilled Trades (Welder, etc.)", count: "120+ Jobs Available" },
  { name: "Service Roles (Security, etc.)", count: "180+ Jobs Available" },
  { name: "Technical Roles (Operator, etc.)", count: "70+ Jobs Available" },
];

export default function JobCategories() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h2>Browse Job Categories</h2>
      <div className="grid">
        {categories.map((category, index) => (
          // Using <article> gives us a nice card style automatically from Pico
          <article key={index} style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{category.name}</h3>
            <p><strong>{category.count}</strong></p>
          </article>
        ))}
      </div>
    </section>
  );
}