import AnimeList from "@/components/AnimeList";
import { Image } from "@nextui-org/react";
import SearchInput from "@/components/Utilities/search-input";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/lib/api-libs";

export default function Page({ searchParams }) {
  async function Content(props) {
    if (!searchParams.q) {
      const TopAnime = await getAnimeResponse("top/anime", "limit=7");

      return (
        <div {...props}>
          <Header title="Paling Populer" linkRef="/populer" />
          <AnimeList api={TopAnime} />
        </div>
      );
    } else {
      const SearchedAnime = await getAnimeResponse(
        "anime",
        `q=${searchParams.q}`
      );

      return (
        <div {...props}>
          <Header title={`Hasil Pencarian ${searchParams.q}`} />

          <AnimeList api={SearchedAnime} />
        </div>
      );
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold p-3">Cari Anime</h1>
      <SearchInput />
      <Content className="pt-3" />
    </div>
  );
}
