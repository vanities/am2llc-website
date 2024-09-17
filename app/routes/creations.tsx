// app/routes/offerings.tsx
import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/react";

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

export default function Creations(): JSX.Element {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-12">Our Creations</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/swiftbible"
            className="block bg-secondary shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <img
                src="/assets/swiftbible/darkicon.png"
                alt="SwiftBible App"
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">SwiftBible App</h2>
                <p className="mb-4">
                  An open-source Bible app with a clean and intuitive interface,
                  written in SwiftUI.
                </p>
                <span className="text-primary hover:underline font-semibold">
                  Learn More &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
