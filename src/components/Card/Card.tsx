import React, { FC } from "react";
import styles from "./Card.module.css";
import FilmBadge from "../FilmBadge";

type Props = {
  imageUrl: string;
  title: string;
  films: string[];
};

const Card: FC<Props> = ({ imageUrl, title, films }) => (
  <div className={styles.customCard}>
    <figure>
      <img width={400} height={560} src={imageUrl} alt={title} />
    </figure>

    <div className="card-body">
      <h2 className="card-title">{title}</h2>

      {films.length > 0 && (
        <div className="card-actions flex-col items-end">
          {films.map((url) => (
            <FilmBadge key={url} url={url} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Card;
