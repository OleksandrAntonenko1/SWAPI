import React from "react";
import { useCharacter } from "../queries";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../constants";
import { getImageUrlById } from "../utils";
import FilmBadge from "../components/FilmBadge";

const Character = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const {
    data: {
      name,
      height,
      mass,
      birth_year,
      gender,
      hair_color,
      eye_color,
      skin_color,
      films,
    } = {},
    isLoading,
  } = useCharacter(id);
  const imageUrl = getImageUrlById(id);

  if (!id) {
    navigate(ROUTES.HOME);

    return null;
  }

  return (
    <>
      <div className="hero bg-base-200 md:my-12 max-w-screen-xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <img
            src={imageUrl}
            className="lg:max-w-sm rounded-lg shadow-2xl"
            alt={name}
          />

          <div className="flex-grow">
            {isLoading ? (
              <progress className="progress w-56 h-12" />
            ) : (
              <h1 className="text-5xl font-bold">{name}</h1>
            )}

            <div className="overflow-x-auto py-6">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td>Height</td>
                    <td>{height}</td>
                  </tr>

                  <tr>
                    <td>Mass</td>
                    <td>{mass}</td>
                  </tr>

                  <tr>
                    <td>Hair color</td>
                    <td>{hair_color}</td>
                  </tr>

                  <tr>
                    <td>Skin color</td>
                    <td>{skin_color}</td>
                  </tr>

                  <tr>
                    <td>Eye color</td>
                    <td>{eye_color}</td>
                  </tr>

                  <tr>
                    <td>Birth year</td>
                    <td>{birth_year}</td>
                  </tr>

                  <tr>
                    <td>Gender</td>
                    <td>{gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold">Films:</h2>
            <div className="py-6">
              {films && films.map((url) => <FilmBadge key={url} url={url} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
