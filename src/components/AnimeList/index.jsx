"use client";

import { Image, Link } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const AnimeList = ({ api }) => {
  return (
    <div className="gap-4 grid grid-cols-2 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 ">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index}>
            <Card shadow="sm" isPressable fullWidth={true}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  loading="lazy"
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt="..."
                  key={anime.mal_id}
                  className="w-full object-cover h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                  src={anime.images.webp.image_url}
                />
              </CardBody>
              <CardFooter className="lg:text-base md:text-sm ">
                <p>{anime.title}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
