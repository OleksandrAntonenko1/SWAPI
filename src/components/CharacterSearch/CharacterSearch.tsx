import React, { useState, ChangeEventHandler, useTransition } from "react";
import { useCharacterSearch } from "queries";
import CharactersList from "components/CharactersList";

const CharacterSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const { data: { results = [] } = {}, isLoading } =
    useCharacterSearch(inputValue);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    startTransition(() => {
      setInputValue(event.target.value);
    });
  };

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <div className="dropdown dropdown-end">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 shadow-2xl"
        >
          {isLoading || isPending ? (
            <li className="text-xl">Loading...</li>
          ) : (
            <CharactersList characters={results} />
          )}
        </ul>
      </div>
    </>
  );
};

export default CharacterSearch;
