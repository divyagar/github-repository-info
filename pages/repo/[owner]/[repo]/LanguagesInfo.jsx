import React, { useState, useEffect } from "react";
import { InfoHeader } from "./InfoHeader";

export const LanguagesInfo = ({ heading, url, errorMsg }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setInfo(res));
    setLoading(false);
  }, [url]);

  return (
    <div className="mt-2 bg-purple pt-1 pb-2 pl-7 pr-7 rounded-md">
      <InfoHeader
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        heading={heading}
      />
      {showInfo && (
        <div className="md:px-10 py-3 border-t-2 border-purpleLighter">
          {Object.keys(info).length > 0 ? (
            <div>
              {Object.keys(info).map((key) => {
                return (
                  <div className="flex items-center">
                    <div className="w-1/2 mr-3">
                      <h5 className="text-xs">{key}</h5>
                    </div>
                    <div className="w-1/2 mr-3 text-right">
                      <p className="">{info[key]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center"> No language used </div>
          )}
        </div>
      )}
    </div>
  );
};
