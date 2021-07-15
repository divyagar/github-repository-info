import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { useRouter } from "next/router";

export const SearchByName = () => {
  const history = useRouter();
  const [repo, setRepo] = React.useState("");
  const [owner, setOwner] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/repo/${owner}/${repo}`);
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
        <div className="border-2 border-white p-5 flex flex-col rounded-lg space-y-2">
          <input
            type="text"
            placeholder="Owner name"
            className="py-2 px-5 text-lg rounded-lg bg-whiteShade text-purple placeholder-purpleLight"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            type="text"
            placeholder="Repostory name"
            className="py-2 px-5 text-lg rounded-lg bg-whiteShade text-purple placeholder-purpleLight"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="py-2 px-5 text-lg rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </motion.div>
  );
};
