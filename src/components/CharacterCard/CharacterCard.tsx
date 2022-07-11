import Card from "components/Card";
import React, { FC, memo } from "react";
import { Character } from "types";
import { Link } from "react-router-dom";
import { getIdFromCharacterUrl, getImageUrlById } from "utils";
import { ROUTES } from "../../constants";

type Props = {
  character?: Character;
};

const CharacterCard: FC<Props> = ({
  character: { name = "", films = [], url = "" } = {},
}) => {
  const characterId = getIdFromCharacterUrl(url);
  const imageUrl = getImageUrlById(characterId);

  return (
    <Link to={`${ROUTES.CHARACTER}/${characterId}`}>
      <Card title={name} films={films} imageUrl={imageUrl} />
    </Link>
  );
};

export default memo(CharacterCard);
