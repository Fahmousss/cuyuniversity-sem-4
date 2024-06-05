"use client";

import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  params.set("q", "");

  const handleSearch = () => {
    if (pathname === "/search") {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`/search?${params.toString()}`);
    }
  };

  const handleInput = ({ q }) => {
    if (q) {
      params.set("q", q);
    } else {
      params.set("q", "");
    }
  };

  return (
    <div className="flex justify-between gap-2">
      <Input
        variant="bordered"
        type="search"
        placeholder="Type to search..."
        startContent={
          <IoSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleInput({ q: e.target.value })}
      />
      <Button auto onClick={(e) => handleSearch({ q: e.target.value })}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
