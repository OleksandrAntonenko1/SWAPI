import { useQuery } from "react-query";
import { getJson } from "utils";
import { Film } from "../types";

const filmQueryKey = "film";

export const useFilm = (url: string) =>
  useQuery<Film>([filmQueryKey, url], () => getJson<Film>(url));
