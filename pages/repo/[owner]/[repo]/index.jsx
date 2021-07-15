import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LanguagesInfo from "./LanguagesInfo";
import Component1 from "./Component1";
import TagsInfo from "./TagsInfo";

export default function RepoInfo() {
  const router = useRouter();
  const { owner, repo } = router.query;

  const [repoInfo, setRepoInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (owner && repo)
      fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((response) => response.json())
        .then((json) => {
          if (json?.message === "Not Found") {
            setInvalid(true);
          } else setRepoInfo(json);
        })
        .catch((error) => {
          console.log(error);
        });

    setIsLoading(false);
  }, [owner, repo]);

  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let value = "";
  if (isLoading) value = "Loading...";
  else if (invalid)
    value = (
      <div className="flex flex-col my-auto flex-grow justify-center items-center">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          xmlSpace="preserve"
          fill="white"
        >
          <path d="M83.333 36.668h-6.666c0-14.727-11.94-26.667-26.667-26.667s-26.667 11.94-26.667 26.667h-6.666a6.666 6.666 0 0 0-4.714 11.38l11.38 11.38V87.85c.039.016.078.02.117.035a27.832 27.832 0 0 0 6.596 1.823c4.863.716 9.847.11 14.505-1.826a14.15 14.15 0 0 1 10.898.003 27.529 27.529 0 0 0 10.547 2.113 27.44 27.44 0 0 0 10.554-2.116c.039-.017.078-.02.117-.036V59.428l11.38-11.38a6.666 6.666 0 0 0-4.714-11.38zM40 43.334c-1.843 0-3.333-1.49-3.333-3.333s1.49-3.333 3.333-3.333 3.333 1.49 3.333 3.333-1.49 3.333-3.333 3.333zm10 13.334c-3.679 0-6.667-2.236-6.667-5s2.988-5 6.667-5c3.682 0 6.667 2.236 6.667 5s-2.985 5-6.667 5zm10-13.334c-1.843 0-3.333-1.49-3.333-3.333s1.49-3.333 3.333-3.333 3.333 1.49 3.333 3.333-1.49 3.333-3.333 3.333z" />
        </svg>{" "}
        <div className="uppercase">No repository found</div>
      </div>
    );
  else {
    value = (
      <div className="tracking-wider flex-grow mx-3 md:mx-0">
        <div className="border-b-2 border-purpleLighter pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 text-left text-gray-300 text-sm">
            <div className="col-span-1">
              <div className="mt-1">
                <span className="text-sm uppercase">Name :</span>{" "}
                {repoInfo?.name || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">Owner :</span>{" "}
                {repoInfo?.owner?.login || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">url :</span>{" "}
                <a href={repoInfo?.html_url || "/"} className="underline">
                  {repoInfo?.full_name}
                </a>
              </div>
            </div>
            <div className="col-span-1 md:text-right">
              <div className="mt-1">
                <span className="text-sm uppercase">Created at :</span>{" "}
                {new Date(repoInfo?.created_at).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                ) || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">Last Updated at :</span>{" "}
                {new Date(repoInfo?.updated_at).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                ) || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">Last Pushed at :</span>{" "}
                {new Date(repoInfo?.pushed_at).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                ) || "---"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-left">
            <div className="col-span-1">
              <div className="mt-1">
                <span className="text-sm uppercase">Total forks :</span>{" "}
                {repoInfo?.forks || repoInfo?.forks_count || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">Total watchers :</span>{" "}
                {repoInfo?.watchers || repoInfo?.watchers_count || "---"}
              </div>
            </div>
            <div className="col-span-1 md:text-right">
              <div className="mt-1">
                <span className="text-sm uppercase">Total stargazers :</span>{" "}
                {repoInfo?.stargazers_count || "---"}
              </div>
              <div className="mt-1">
                <span className="text-sm uppercase">Total subscribers :</span>{" "}
                {repoInfo?.subscribers_count || "---"}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 border-b-2 border-purpleLighter py-5 text-sm text-center">
          <span className="uppercase">About :</span>{" "}
          {repoInfo?.description || "---"}
        </div>

        {repoInfo.languages_url && (
          <LanguagesInfo
            heading="Languages used"
            url={repoInfo.languages_url}
            errorMsg="No languages used"
          />
        )}

        {repoInfo.tags_url && (
          <TagsInfo heading="Tags" url={repoInfo.tags_url} />
        )}

        {repoInfo.stargazers_url && (
          <Component1 heading="Stargazers" url={repoInfo.stargazers_url} />
        )}

        {repoInfo.subscribers_url && (
          <Component1 heading="Subscribers" url={repoInfo.subscribers_url} />
        )}
      </div>
    );
  }

  return value;
}
