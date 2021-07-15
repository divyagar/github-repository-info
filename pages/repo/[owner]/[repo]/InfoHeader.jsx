import React from "react";

export const InfoHeader = ({ showInfo, setShowInfo, heading }) => {
  return (
    <div
      className="flex justify-between items-center cursor-pointer my-2"
      onClick={() => setShowInfo((value) => !value)}
    >
      <h3 className="text-lg">{heading}</h3>
      {showInfo && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6"
        >
          <g data-name="Circle bawah">
            <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" />
            <path d="M12 15a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 12.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 12 15z" />
          </g>
        </svg>
      )}

      {!showInfo && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6"
        >
          <g data-name="Circle kanan">
            <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" />
            <path d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z" />
          </g>
        </svg>
      )}
    </div>
  );
};
