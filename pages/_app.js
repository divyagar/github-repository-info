import React from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-5980712732723248"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Github, repository, github repository information, repository information, github information,
           free github repository information, git, git repository, github repository, git repository information, 
           git repository info, repository info, github repository info"
        />
        <meta
          name="description"
          content="Find information of a github repository"
        />
      </Head>
      <main className="min-h-screen bg-purple text-whiteShade flex flex-col font-roboto font-bold">
        <div className="flex flex-col md:flex-row justify-center mt-7 space-x-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="text-center text-4xl inline-block tracking-wide uppercase">
            Github Repository Info
          </h1>
        </div>
        <div className="h-full flex-grow my-10 mx-5 md:mx-24 bg-purpleLight rounded-2xl shadow-2xl py-10 md:px-16 flex justify-stretch items-stretch">
          <Component {...pageProps} />
        </div>
      </main>

      <footer className="text-center bg-purpleLight text-white py-3 text-xs">
        <div>
          <a href="https://github.com/divyagar/github-repository-info">
            {" "}
            Github repository{" "}
          </a>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
