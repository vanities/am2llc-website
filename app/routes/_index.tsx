// app/routes/index.tsx
import NavBar from "~/components/NavBar";
import { MetaFunction } from "@remix-run/react";

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

const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

const getRandomGradient = () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();
  return `linear-gradient(-45deg, ${color1}, ${color2}, ${color3}, ${color4})`;
};

export default function Index(): JSX.Element {
  const randomGradient = getRandomGradient();

  return (
    <div>
      <NavBar />
      <div
        className="h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: randomGradient,
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      >
        <img src="/assets/logo.png" alt="am2 llc logo" className="mb-8 w-64" />
      </div>
    </div>
  );
}

const styles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export function links() {
  return [
    { rel: "stylesheet", href: "data:text/css," + encodeURIComponent(styles) },
  ];
}
