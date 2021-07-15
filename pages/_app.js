import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="min-h-screen bg-purple text-whiteShade flex flex-col font-roboto font-bold">
        <div className="flex flex-col md:flex-row justify-center mt-7 space-x-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="text-center text-4xl inline-block tracking-wide uppercase">
            Github Repository Info
          </h1>
        </div>
        <div className="h-full flex-grow my-10 mx-5 md:mx-24 bg-purpleLight rounded-2xl shadow-2xl py-10 px-10 md:px-16 flex justify-stretch items-stretch">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
