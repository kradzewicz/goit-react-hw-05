/** @format */
import { useEffect, useState } from "react";
import { fetchFeatured } from "../api/api";
import { MovieList } from "../components/MovieList";

export default function Home() {
  const [featuredList, setFeaturedList] = useState([]);

  useEffect(() => {
    const getFeaturedList = async () => {
      const response = await fetchFeatured();
      setFeaturedList(response);
    };
    getFeaturedList();
  }, []);

  return (
    <>
      <h1>Featured Movies</h1>
      <ul>
        <MovieList movieList={featuredList} />
      </ul>
    </>
  );
}
