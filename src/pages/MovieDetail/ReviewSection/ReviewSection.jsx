import React, { useState } from "react";
import {useMovieReviewsQuery} from "../../../hooks/MovieDetail/useMovieReviews";
import "./ReviewSection.style.css";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import star from "../../../common/images/star.png";

const ReviewSection = ({movie_id,componentState}) => {
  const[seeMore,setSeeMore]=useState("short");

  const {data, isLoading, isError, error} = useMovieReviewsQuery(movie_id);
  console.log("review data", data);

  // const createRating=()=>{ //show stars based on rating number
  //   for(let i=0;i<(review.author_details.rating/2);i++){
  //   }
  // }

  const seeMoreReviewContent=()=>{
    seeMore==="short"?setSeeMore("long"):setSeeMore("short");
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div className={`review-outer-container ${componentState}`}>
      <div className="review-container">
        <h1 className="text-center pb-2">Reviews</h1>
        {data?.results.map((review, index) => {
          return (
            <div className={`review-box m-2 mb-3 ${seeMore}`} key={index}>
              <div className="review-first-line">
                <span className="author-name">{review.author}</span>
                <span>
                  rating:{review.author_details.rating}
                  <img src={star} width="20px" className="push-up" />
                </span>
              </div>

              <div className={`content-outer-box ${seeMore}`}>
                <div className={`content-inner-box ${seeMore}`}>
                  <div>{review.content}</div>
                </div>
                <div className={`see-more-button ${seeMore}`} onClick={seeMoreReviewContent}>
                  더보기..
                </div>
              </div>
              
              <h6>{review.updated_at}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
