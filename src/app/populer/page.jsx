"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/lib/api-libs";
import { Pagination } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [TopAnime, setTopAnime] = useState([]);

  const fetchTopAnime = async () => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    // );
    // const data = await response.json();

    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchTopAnime();
  }, [page]);

  return (
    <div>
      <Header title="Populer Anime" />
      <AnimeList api={TopAnime} />
      <div className="p-4 flex justify-center">
        <Pagination
          color="success"
          showControls
          total={TopAnime.pagination?.last_visible_page}
          onChange={(newPage) => {
            setPage(newPage);
            scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Page;
