import React, { useState, ChangeEventHandler, useTransition } from "react";
import { useCharacterSearch } from "queries";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { getIdFromCharacterUrl } from "utils";

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
          {results.length > 0 ? (
            results.map(({ name, url }) => (
              <li key={url}>
                <Link to={`${ROUTES.CHARACTER}/${getIdFromCharacterUrl(url)}`}>
                  {name}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-xl">No results found</li>
          )}

          {isLoading || (isPending && <li className="text-xl">Loading...</li>)}
        </ul>
      </div>
    </>
  );
};

export default CharacterSearch;
