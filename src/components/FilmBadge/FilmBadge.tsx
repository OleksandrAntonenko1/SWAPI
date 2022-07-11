import React, { FC } from "react";
import { useFilm } from "queries";
import FilmBadgeSkeleton from "./FilmBadgeSkeleton";

type Props = {
  url: string;
};

const FilmBadge: FC<Props> = ({ url }) => {
  const { data: { title = "" } = {}, isLoading } = useFilm(url);

  if (isLoading) {
    return <FilmBadgeSkeleton />;
  }

  return <div className="badge badge-outline min-w-[60px]">{title}</div>;
};

export default FilmBadge;
