/** @format */

import { Link, useLocation } from "react-router-dom";

export function MovieList({ movieList }) {
  const location = useLocation();

  return (
    <>
      {movieList.length === 0
        ? ""
        : movieList.map((movie) => (
            <li key={movie.id}>
              <Link
                state={`${location.pathname}${location.search}`}
                to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
    </>
  );
}
