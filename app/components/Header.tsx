// app/components/Header.tsx
export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li><strong>JobPortal</strong></li>
        </ul>
        <ul>
          <li><a href="#" role="button" className="secondary">Sign In</a></li>
          <li><a href="#" role="button">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}