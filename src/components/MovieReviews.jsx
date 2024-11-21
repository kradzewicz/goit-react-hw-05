/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api/api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetchReviews(movieId);
      setReview(response);
    };
    getReviews();
  }, [movieId]);
  console.log(review);

  if (review.length === 0) {
    return <p>Sorry, there's no information about the review!</p>;
  }
  return (
    <>
      <ul>
        {review.map((item) => (
          <li key={item.id} style={{ borderBottom: "1px solid black" }}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
