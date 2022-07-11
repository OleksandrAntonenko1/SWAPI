import React, { useMemo } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { useCharacters } from "../queries";
import CharacterCard from "../components/CharacterCard";
import HomeSkeleton from "../components/HomeSkeleton";

const Home = () => {
  const {
    data = { pages: [] },
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useCharacters();
  const characters = useMemo(
    () => data.pages.flatMap(({ results }) => results),
    [data]
  );
  const handleEndReached = () => hasNextPage && fetchNextPage();

  return (
    <>
      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <>
          <VirtuosoGrid
            useWindowScroll
            listClassName="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            className="flex-grow"
            overscan={500}
            totalCount={characters.length}
            itemContent={(index) => (
              <CharacterCard character={characters.at(index)} />
            )}
            endReached={handleEndReached}
          />

          {isFetchingNextPage && (
            <div className="w-full text-center my-6 text-2xl">Loading...</div>
          )}

          {!hasNextPage && (
            <div className="w-full text-center my-6 text-2xl">
              Nothing more to load
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
