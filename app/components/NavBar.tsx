// app/components/NavBar.tsx
import { Link } from "@remix-run/react";

export default function NavBar(): JSX.Element {
  return (
    <nav className="bg-transparent text-primary fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-secondary transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/creations"
              className="hover:text-secondary transition-colors duration-300"
            >
              Creations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-secondary transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
