import React, { useEffect, useState } from "react";
import { InfoHeader } from "./InfoHeader";

export const TagsInfo = ({ heading, url }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [end, setEnd] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}?page=${1}&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length === 0) setEnd(true);
        setTags([...res]);
      });

    setLoading(false);
  }, [url]);

  const fetchData = () => {
    setLoading(true);
    fetch(`${url}?page=${pageNumber}&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length === 0) setEnd(true);
        setTags([...tags, ...res]);
      });

    setLoading(false);
    setPageNumber((value) => value + 1);
  };

  return (
    <div className="mt-2 bg-purple pt-1 pb-2 pl-7 pr-7 rounded-md">
      <InfoHeader
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        heading={heading}
      />

      {showInfo && (
        <div className="md:px-10 border-t-2 border-purpleLighter py-3 text-sm tracking-widest">
          {tags && Object.keys(tags).length === 0 && (
            <div className="text-center"> No tags found </div>
          )}
          {Object.keys(tags).length > 0 && (
            <div className="pb-2">
              {Object.keys(tags).map((tag) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex-1">{tags[tag]?.name}</div>
                    <a
                      className="flex-1 text-center"
                      href={tags[tag]?.tarball_url}
                    >
                      Tar file
                    </a>
                    <a
                      className="flex-1 text-right"
                      href={tags[tag]?.zipball_url}
                    >
                      Zip file
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {!end && (
            <button
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
