/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../api/api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const response = await fetchCast(movieId);
      setCast(response);
    };
    getCast();
  }, [movieId]);
  console.log(cast);

  if (cast.length === 0) {
    return <p>Sorry, there's no information about the cast!</p>;
  }
  return (
    <>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                  : ""
              }
              alt=""
              width="150"
            />
            <h3>{item.name}</h3>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
