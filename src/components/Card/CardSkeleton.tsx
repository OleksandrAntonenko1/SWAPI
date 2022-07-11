import React from "react";
import styles from "./Card.module.css";
import { FilmBadgeSkeleton } from "../FilmBadge";

const CardSkeleton = () => {
  return (
    <div className={styles.customCard}>
      <figure>
        <img width={400} height={560} src="/starWars.svg" alt="loading" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <progress className="progress w-full my-1 h-6" />
        </h2>

        <div className="card-actions flex-col items-end">
          <FilmBadgeSkeleton />
          <FilmBadgeSkeleton />
          <FilmBadgeSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
