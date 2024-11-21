/** @format */

import { lazy, Suspense } from "react";
import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { NotFoundPage } from "../pages/NotFoundPage";

const Home = lazy(() => import("../pages/HomePage"));
const Movies = lazy(() => import("../pages/MoviesPage"));
const MovieDetails = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../components/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
