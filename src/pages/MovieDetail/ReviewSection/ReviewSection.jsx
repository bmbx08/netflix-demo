import React from "react";
import {useMovieReviewsQuery} from "../../../hooks/MovieDetail/useMovieReviews";
import "./ReviewSection.style.css";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";

const ReviewSection = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieReviewsQuery(movie_id);
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <ErrorMessage/>;
  }
  return (
    <div>
        <h1>Reviews</h1>
      {data?.results.map((review, index) => {
        return (
          <div className="review-box" key={index}>
            <span className="author-name">{review.author}</span>
            <span>rating:{review.author_details.rating}</span>
            <div>{review.content}</div>
            <h6>{review.updated_at}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewSection;
