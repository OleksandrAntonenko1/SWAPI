import React from "react";
import { CardSkeleton } from "../Card";

const HomeSkeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </div>
);

export default HomeSkeleton;
