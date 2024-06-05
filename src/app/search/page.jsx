import AnimeList from "@/components/AnimeList";
import { Image } from "@nextui-org/react";
import SearchInput from "@/components/Utilities/search-input";
import Header from "@/components/AnimeList/header";

export default function Page({ searchParams }) {
  async function Content(props) {
    if (!searchParams.q) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`
      );
      const TopAnime = await response.json();
      return (
        <div {...props}>
          <Header title="Paling Populer" linkRef="/populer" />
          <AnimeList api={TopAnime} />
        </div>
      );
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${searchParams.q}`
      );
      const SearchedAnime = await response.json();
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
