// app/components/NavBar.tsx
import { Link } from "@remix-run/react";

import ThemeToggle from "~/components/ThemeToggle";

export default function NavBar(): JSX.Element {
  return (
    <nav className="bg-primary text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          am2 llc
        </Link>
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
              to="/offerings"
              className="hover:text-secondary transition-colors duration-300"
            >
              Offerings
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative inline-block text-primary font-semibold group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Contact Us
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
}
