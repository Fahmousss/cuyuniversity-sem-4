import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/lib/api-libs";

export default async function Page() {
  const TopAnime = await getAnimeResponse("top/anime", "limit=7");

  return (
    <>
      {/* Anime Populer */}
      <section id="anime-populer">
        <Header title="Paling Populer" linkRef="/populer" />
        <AnimeList api={TopAnime} />
      </section>

      {/* Anime Terbaru */}
      <section>
        <Header title="Paling Baru" linkRef="/anime/new-anime" />
        <AnimeList api={TopAnime} />
      </section>
    </>
  );
}
