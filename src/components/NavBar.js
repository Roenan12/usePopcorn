import { Logo } from "./Logo";

//Structural component and composition
export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
