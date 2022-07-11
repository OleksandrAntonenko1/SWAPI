import { ASSETS_URL } from "../constants";

const idRegexp = /people\/(\d+)/;

export const getIdFromCharacterUrl = (url: string): string => {
  const regExpMatchArray = url.match(idRegexp);

  return regExpMatchArray ? regExpMatchArray[1] : "";
};

export const getImageUrlById = (id: string): string => {
  return `${ASSETS_URL}/img/characters/${id}.jpg`;
};
