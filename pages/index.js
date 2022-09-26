import Head from "next/head";
import Hero from "../components/Hero";
import Proyects from "../components/Proyects";

export default function Home() {
  return (
    <div data-theme="cmyk" className="h-full flex flex-col items-center ">
      <Head>
        <title>Francisco Sepulveda DEV - 2022</title>
        <meta
          name="description"
          content="Portfolio personal de Francisco Sepulveda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-11/12 flex justify-center flex-col items-center h-full">
        <Hero />
        <Proyects />
      </main>
    </div>
  );
}
