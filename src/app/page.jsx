import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const TopAnime = await response.json();

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
