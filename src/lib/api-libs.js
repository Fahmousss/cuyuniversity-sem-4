import React from "react";

export const getAnimeResponse = async (resources, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resources}?${query}`
  );
  const anime = await response.json();
  return anime;
};
