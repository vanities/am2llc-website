// app/routes/offerings/swiftbible.tsx
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "SwiftBible App - [Your Consultancy Name]" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

export default function SwiftBible(): JSX.Element {
  return (
    <center>
      <div>
        <NavBar />
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-4">SwiftBible App</h1>
          <img
            src="/assets/swiftbible/screenshot1.png"
            alt="SwiftBible Screenshot"
            className="w-40 h-auto mb-4"
          />
          <p className="mb-4">
            SwiftBible is an open-source King James Version Bible app built with
            SwiftUI. It offers features such as:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Clean and intuitive interface</li>
            <li>Fast navigation between books and chapters</li>
            <li>Offline access</li>
            <li>Open-source code for customization</li>
          </ul>
          <p>
            <a
              href="https://github.com/vanities/swiftbible"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View the Project on GitHub
            </a>
          </p>
          <p className="mt-4">
            <a href="/support" className="text-blue-500 hover:underline">
              Need help? Visit our Support Page
            </a>
          </p>
        </main>
      </div>
    </center>
  );
}
