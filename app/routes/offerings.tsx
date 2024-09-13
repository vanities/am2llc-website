// app/routes/offerings.tsx
import { Link } from "@remix-run/react";

import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "What we build - am2 llc" },
    {
      property: "og:title",
      content: "building - am2 llc",
    },
    {
      name: "description",
      content: "check it out",
    },
  ];
};

export default function Offerings(): JSX.Element {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Offerings</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/assets/swiftbible/screenshot1.png"
              alt="SwiftBible App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">SwiftBible App</h2>
              <p className="text-gray-700 mb-4">
                An open-source Bible app with a clean and intuitive interface.
              </p>
              <Link
                to="/swiftbible"
                className="text-secondary hover:underline font-semibold"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
          {/* Additional cards can be added here */}
        </div>
      </main>
    </div>
  );
}
