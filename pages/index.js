import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About />
      <Skills />
      <Work />
    </>
  );
}
