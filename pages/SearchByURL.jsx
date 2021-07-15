import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { useRouter } from "next/router";

export const SearchByURL = () => {
  const router = useRouter();
  const [url, setUrl] = React.useState("");
  const [invalid, setInvalid] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = url.split("/").filter((str) => str != "");
    if (array.length != 4) {
      setInvalid(true);
      return;
    }

    router.push(`/repo/${array[2]}/${array[3]}`);
  };

  return (
    <motion.div
      className=""
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <form
        className="text-black flex justify-center items-center m-2"
        onSubmit={handleSubmit}
      >
        <div className="border-2 border-whiteShade p-5 flex flex-col rounded-lg space-y-2">
          {invalid && <div className="text-red-200">Invalid URL</div>}
          <input
            type="text"
            placeholder="Repository URL"
            className="py-2 px-5 text-lg rounded-lg bg-whiteShade text-purple placeholder-purpleLight"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="py-2 px-5 text-lg rounded-lg cursor-pointer bg-whiteShade font-bold text-purpleLight"
          />
        </div>
      </form>
    </motion.div>
  );
};
