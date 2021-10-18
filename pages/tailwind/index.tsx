import Card from "@components/card";
import CardList from "@components/cardList";
import CtaButton from "@components/ctaButton";
import Link from "next/link";

const Tailwind = () => {
  return (
    <div className="container p-4">
      <Link href="/">
        <a className="inline-block">
          <CtaButton>&lt; Back</CtaButton>
        </a>
      </Link>
      <br />
      <br />
      <CardList>
        <Card>
          <h1 className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Tailwind CSS
          </h1>
          <h3 className="text-md font-bold text-center text-gray-500">
            A utility-based CSS library for modern web development.
          </h3>
          <br />
          <p>
            This page explores different Tailwind concepts, practices, and
            custom pre-made components. All you gotta do is add a bunch of
            pre-made, succinct CSS classes to your relevant HTML (or in this
            case, React components)!
          </p>
          <br />
          <p>For example:</p>
          <code className="bg-gray-200">
            {`<p className="font-extrabold text-red-500 px-2 -rotate-3 bg-black inline-block">Hello, World!</p>`}
          </code>
          <p>gets you...</p>
          <p className="font-extrabold text-red-500 px-2 -rotate-3 bg-black inline-block">
            Hello, World!
          </p>
          <br />
          <br />
          <p>
            Pretty neat, huh? There's various reasons to use and not to use
            Tailwind CSS, and there are a bajillion people out there who cover
            it better than I ever could. To figure out if it's right for you
            though, best way is to just try it out! It's super easy to start.
          </p>
          <br />
          <p>
            For more info, visit{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-blue-500 underline"
            >
              TailwindCSS.com
            </a>
          </p>
        </Card>
        <br />
        <Card>
          <h1 className="text-lg font-bold">Colors</h1>
          <p className="text-blue-500">text-blue-500</p>
          <p className="text-yellow-800">text-yellow-800</p>
          <p className="text-white bg-indigo-500">text-white bg-indigo-500</p>
        </Card>
        <br />
        <Card>
          <h1 className="text-lg font-bold">Background</h1>
          <p>
            To extend Tailwind CSS with your own images for backgrounds, you can
            do the following:
          </p>
          <pre className="shadow-inner bg-gray-100 overflow-x-auto p-4">
            {`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}
`}
          </pre>
          <br />
          <br />
          <p>bg-cover bg-center bg-panda p-8</p>
          <div className="bg-cover bg-center bg-panda p-8">
            <p className="text-white bg-indigo-500">text-white bg-indigo-500</p>
            <div className="backdrop-blur-md m-4 p-4 rounded-md shadow-2xl">
              <p className="font-medium text-center p-4">
                backdrop-blur-md m-4 p-4 rounded-md shadow-2xl
              </p>
            </div>
          </div>
        </Card>
        <br />
        <Card>
          <h1 className="text-lg font-bold">Opacity</h1>
          <div className="bg-black">
            <p className="text-white bg-indigo-500">text-white bg-indigo-500</p>
            <p className="text-white bg-indigo-500 bg-opacity-50">
              text-white bg-indigo-500 bg-opacity-50
            </p>
            <p className="text-white bg-indigo-500 bg-opacity-25">
              text-white bg-indigo-500 bg-opacity-25
            </p>
            <p className="text-white bg-indigo-500 bg-opacity-0">
              text-white bg-indigo-500 bg-opacity-0
            </p>
          </div>
        </Card>
        <br />
        <Card>
          <h1 className="text-lg font-bold">And so much more...</h1>
          <ul>
            {[
              "Overflow",
              "Z-Index",
              "Flexbox",
              "Grid",
              "Spacing",
              "Sizing",
              "Typography",
              "Borders & Rings",
              "Effects, Filters, Animation",
              "Transforms, SVG Functions",
              "Accessibility",
              "...and more!",
            ].map((i) => (
              <li className="m-1 py-2 px-4 bg-indigo-500 inline-block font-bold text-white rounded-md shadow-md">
                {i}
              </li>
            ))}
          </ul>
        </Card>
      </CardList>
    </div>
  );
};

export default Tailwind;
