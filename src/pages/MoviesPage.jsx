/** @format */

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../api/api";
import { MovieList } from "../components/MovieList";

export default function Movies() {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const { query } = form.elements;
    if (query.value === "") {
      console.log("to pole jest wymagane");
      return;
    }
    setSearchParams({ query: query.value });
  };

  useEffect(() => {
    const getSearch = async () => {
      const response = await fetchSearch(query);
      setSearchList(response);
    };
    getSearch();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search by keywords..." />
        <button type="submit">Search</button>
      </form>
      <Suspense fallback={<h3>Searching movies...</h3>}>
        <MovieList movieList={searchList} />
      </Suspense>
    </>
  );
}
