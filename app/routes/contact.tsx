// app/routes/contact.tsx
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MetaFunction } from "@remix-run/react";

import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - am2 llc" },
    {
      property: "og:title",
      content: "contact - am2 llc",
    },
    {
      name: "description",
      content: "contact us",
    },
  ];
};

export default function Contact(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <div className="flex items-center justify-center mb-4">
            <EnvelopeIcon className="h-6 w-6 text-primary mr-2" />
            <p>
              Email us at{" "}
              <a href="mailto:mischke@proton.me">mischke@proton.me</a>
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
