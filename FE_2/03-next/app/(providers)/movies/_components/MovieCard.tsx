"use client";

import { Movie } from "@/app/(providers)/movies/page";
import { useEffect } from "react";

function MovieCard({ movie }: { movie: Movie }) {
  useEffect(() => {
    console.log(movie.title);
  }, [movie]);

  return <button style={{ border: "1px solid black" }}>{movie.title}</button>;
}

export default MovieCard;
