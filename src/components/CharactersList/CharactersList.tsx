import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { getIdFromCharacterUrl } from "utils";
import { Character } from "types";

type Props = {
  characters: Character[];
};

const CharactersList: FC<Props> = ({ characters }) =>
  characters.length > 0 ? (
    <>
      {characters.map(({ name, url }) => (
        <li key={url}>
          <Link to={`${ROUTES.CHARACTER}/${getIdFromCharacterUrl(url)}`}>
            {name}
          </Link>
        </li>
      ))}
    </>
  ) : (
    <li className="text-xl">No results found</li>
  );

export default CharactersList;
