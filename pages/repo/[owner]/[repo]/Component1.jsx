import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";

const Component1 = ({ heading, url }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState([]);
  const [end, setEnd] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    fetch(`${url}?page=1&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length === 0) setEnd(true);
        setInfo([...res]);
      });
  }, [url]);

  const fetchData = () => {
    fetch(`${url}?page=${pageNumber}&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length === 0) setEnd(true);
        setInfo([...info, ...res]);
      });

    setPageNumber((value) => value + 1);
  };
  return (
    <div className="mt-2 bg-purple pt-1 pb-2 pl-7 pr-7 rounded-md my">
      <InfoHeader
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        heading={heading}
      />

      {showInfo && (
        <div className="md:px-10 py-3 border-t-2 border-purpleLighter text-sm">
          {info && Object.keys(info).length === 0 && (
            <div className="text-center">
              {" "}
              No <span className="lowercase">{heading}</span> found{" "}
            </div>
          )}
          {Object.keys(info).length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {Object.keys(info).map((tag) => (
                <div className="grid col-span-1 my-1">
                  <a className="text-center" href={info[tag]?.html_url}>
                    {info[tag]?.login}
                  </a>
                </div>
              ))}
            </div>
          )}
          {!end && (
            <button
              type="submit"
              onClick={() => fetchData()}
              className="bg-purpleLight w-full py-3 rounded-lg mt-3 mb-2"
            >
              Load more data
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Component1;
