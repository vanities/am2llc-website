// app/components/Footer.tsx
import { Link } from "@remix-run/react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} [Your Consultancy Name]</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 fill-current hover:text-white transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* GitHub icon SVG path */}
              </svg>
            </a>
            {/* Other social icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}
