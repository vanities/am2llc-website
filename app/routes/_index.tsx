// app/routes/index.tsx
import { Link } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "am2 llc" },
    {
      property: "og:title",
      content: "am2 llc",
    },
    {
      name: "description",
      content: "building anything",
    },
  ];
};

export default function Index(): JSX.Element {
  return (
    <div>
      <NavBar />
      <header className="bg-gradient-to-r from-primary to-secondary text-white h-screen flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Empowering Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We deliver innovative software solutions tailored to your needs.
          </p>
          <Link
            to="/offerings"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300"
          >
            Discover Our Services
          </Link>
        </div>
      </header>
      <Footer />
    </div>
  );
}
