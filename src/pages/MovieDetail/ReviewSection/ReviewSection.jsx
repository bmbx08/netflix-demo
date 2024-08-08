import React from "react";
import {useMovieReviewsQuery} from "../../../hooks/MovieDetail/useMovieReviews";
import "./ReviewSection.style.css";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import star from "../../../common/images/star.png"

const ReviewSection = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieReviewsQuery(movie_id);
  console.log("review data", data);

  // const createRating=()=>{ //show stars based on rating number
  //   for(let i=0;i<(review.author_details.rating/2);i++){
  //   }
  // }

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <ErrorMessage error={error}/>;
  }
  return (
    <div>
        <h1>Reviews</h1>
      {data?.results.map((review, index) => {
        return (
          <div className="review-box m-2 mb-3" key={index}>
            <span className="author-name">{review.author}</span>
            <span>rating:{review.author_details.rating}

              <img src={star} width="20px" className="push-up"/>
            </span>
            <div>{review.content}</div>
            <h6>{review.updated_at}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewSection;
