import Header from "@/components/AnimeList/header";
import MyModal from "@/components/Utilities/Modal";
import { getAnimeResponse } from "@/lib/api-libs";
import { Button, Image } from "@nextui-org/react";
import React from "react";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <MyModal
        title={`Trailer ${anime.data.title}`}
        trailer={anime.data.trailer.youtube_id}
        name={"Tonton Trailer"}
      />
      <div>
        <Header title={anime.data.title} />
        <p className="px-3 leading-3 text-sm font-thin text-foreground-300">
          Released at {anime.data.year ? anime.data.year : "-"}
        </p>
      </div>
      <div className="flex gap-3 m-3 overflow-x-auto justify-start">
        <Button variant="bordered" radius="sm" size="lg">
          <div className="flex flex-col items-center gap-1">
            <p className="text-foreground-400 text-xs font-bold gap-1">
              PERINGKAT
            </p>
            <i className="text-foreground-400 text-xs ">
              {anime.data.rank ? anime.data.rank : "-"}
            </i>
          </div>
        </Button>
        <Button variant="bordered" radius="sm" size="lg">
          <div className="flex flex-col items-center gap-1">
            <p className="text-foreground-400 text-xs font-bold gap-1">SKOR</p>
            <i className="text-foreground-400 text-xs ">{anime.data.score}</i>
          </div>
        </Button>
        <Button variant="bordered" radius="sm" size="lg">
          <div className="flex flex-col items-center gap-1">
            <p className="text-foreground-400 text-xs font-bold gap-1">
              ANGGOTA
            </p>
            <i className="text-foreground-400 text-xs">{anime.data.members}</i>
          </div>
        </Button>
        <Button variant="bordered" radius="sm" size="lg">
          <div className="flex flex-col items-center gap-1">
            <p className="text-foreground-400 text-xs font-bold gap-1">
              EPISODE
            </p>
            <i className="text-foreground-400 text-xs">{anime.data.episodes}</i>
          </div>
        </Button>
      </div>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-start justify-center">
        <div className="relative col-span-6 md:col-span-4">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width="100%"
            className="md:mt-0 lg:mt-0 xl:mt-0 mt-4"
            height={250}
            shadow="md"
          />
        </div>

        <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h1 className="text-small md:text-medium text-justify font-normal m-3">
                {anime.data.synopsis}
              </h1>
            </div>
          </div>
          <div className="ml-3"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
