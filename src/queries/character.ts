import { useQuery, useInfiniteQuery } from "react-query";
import { getJson } from "utils";
import { Character, PaginatedResponse } from "types";
import { ENDPOINTS } from "../constants";

const characterQueryKey = "character";

export const useCharacter = (id: string) =>
  useQuery<Character>([characterQueryKey, id], () =>
    getJson<Character>(`${ENDPOINTS.PEOPLE}/${id}`)
  );

const charactersQueryKey = "characters";

export const useCharacters = () =>
  useInfiniteQuery<PaginatedResponse<Character[]>>(
    charactersQueryKey,
    ({ pageParam = ENDPOINTS.PEOPLE }) =>
      getJson<PaginatedResponse<Character[]>>(pageParam),
    {
      getNextPageParam: ({ next }) => next,
    }
  );

export const useCharacterSearch = (searchQuery: string) =>
  useQuery<PaginatedResponse<Character[]>>(
    [charactersQueryKey, searchQuery],
    () =>
      getJson<PaginatedResponse<Character[]>>(
        `${ENDPOINTS.PEOPLE}/?search=${searchQuery}`
      )
  );
