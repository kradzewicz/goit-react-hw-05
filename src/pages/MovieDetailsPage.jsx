/** @format */

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetails } from "../api/api";
import { Suspense, useEffect, useRef, useState } from "react";
import { DetailsNavigation } from "../components/DetailsNavigation";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const backBtn = useRef(location.state);
  console.log(backBtn.current);

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetchDetails(movieId);
      setDetails(response);
    };
    getDetails();
  }, [movieId]);

  if (details.length === 0) {
    return;
  }
  return (
    <>
      <Link to={backBtn.current}>
        <button>Go back</button>
      </Link>
      <Suspense fallback={<h3>Loading details...</h3>}>
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          />
          <div>
            <h1>
              {details.title} (
              {details.release_date.split("").slice(0, 4).join("")})
            </h1>
            <h2>Overview</h2>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            {details.genres.map((genre) => {
              return <span key={genre.id}>{genre.name} </span>;
            })}
          </div>
        </div>
      </Suspense>
      <DetailsNavigation />
      <Outlet />
    </>
  );
}
