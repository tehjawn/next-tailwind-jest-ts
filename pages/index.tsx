import CtaButton from "@components/ctaButton";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main>
        <div className="flex flex-col align-items-center p-2 background-red">
          <div className="p-2 flex align-center ">
            <Link href="/hero">
              <a className="inline-block">
                <CtaButton>Hero Landing Page</CtaButton>
              </a>
            </Link>
          </div>
          <div className="p-2">
            <Link href="/tailwind">
              <a className="inline-block">
                <CtaButton>Tailwind Page Example</CtaButton>
              </a>
            </Link>
          </div>
        </div>
        <div className="py-8 px-4 flex flex-col justify-center align-middle text-center">
          <h1 className="leading-tight text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Batteries Included Next.js
          </h1>
          <br />
          <h2 className="text-2x1 max-w-md mx-auto">
            A Next.js Boilerplate with TypeScript, Tailwind CSS, and Jest test
            suite enabled.
          </h2>
        </div>
      </main>
    </>
  );
};

export default Home;
