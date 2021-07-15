import React from "react";
import Head from "next/head";
import SearchByURL from "./SearchByURL";
import SearchByName from "./SearchByName";

export default function Home() {
  const [searchByURL, setSearchByURL] = React.useState(true);
  const text = searchByURL
    ? "Search by owner and repository name"
    : "Search by respository URL";

  return (
    <>
      <Head>
        <title>Github repository info</title>
      </Head>

      <div className="text-center my-16 flex-grow">
        <div className="h-56">
          {searchByURL ? <SearchByURL /> : <SearchByName />}
        </div>
        <div>
          <button
            type="submit"
            onClick={() => setSearchByURL((value) => !value)}
            className="bg-purple rounded-lg px-7 py-3 mx-5 text-xl"
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
}
