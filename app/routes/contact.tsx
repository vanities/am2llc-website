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
            Email us at{" "}
            <a
              href="mailto:mischke@proton.me"
              className="mx-2 text-accent hover:underline"
            >
              mischke@proton.me
            </a>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = (document.getElementById("name") as HTMLInputElement)
                .value;
              const message = (
                document.getElementById("message") as HTMLTextAreaElement
              ).value;
              window.location.href = `mailto:mischke@proton.me?subject=Contact from ${name}&body=${encodeURIComponent(
                message
              )}`;
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-1 mt-1 block w-full text-secondary rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-1 mt-1 block w-full text-secondary rounded-md shadow-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-accent"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
