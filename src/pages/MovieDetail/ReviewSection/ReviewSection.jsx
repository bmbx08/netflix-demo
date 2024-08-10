import React, {useState} from "react";
import ShowMore from "react-show-more-button/dist/module";
import {useMovieReviewsQuery} from "../../../hooks/MovieDetail/useMovieReviews";
import "./ReviewSection.style.css";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import star from "../../../common/images/star.png";
import { Button } from "react-bootstrap";

const ReviewSection = ({movie_id, componentState}) => {
  const [showMore, setShowMore] = useState(false);

  const {data, isLoading, isError, error} = useMovieReviewsQuery(movie_id);
  console.log("review data", data);

  // const createRating=()=>{ //show stars based on rating number
  //   for(let i=0;i<(review.author_details.rating/2);i++){
  //   }
  // }

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
            <div>
              <div className={`review-box m-2 mb-3`} key={index}>
                <div className="review-first-line">
                  <span className="author-name">{review.author}</span>
                  <span>
                    rating:{review.author_details.rating}
                    <img src={star} width="20px" className="push-up" />
                  </span>
                </div>

                <div className={`content-outer-box`}>
                  <div className={`content-inner-box`}>
                    <ShowMore maxHeight={100} backgroundColor="black" classNameButtonDiv="show-more-button" styleButton={{backgroundColor: "gray", width:"12em", height:"3em"}}>
                      <div>{review.content}</div>
                    </ShowMore>
                    {/* <div>
                      {showMore
                        ? review.content
                        : `${review.content.substring(0, 250)}`}
                      showMore이 false일 땐 250자 미만으로 보여주기
                    </div>
                    <div
                      className={`see-more-button`}
                      onClick={showMoreContent}
                    >
                      {showMore ? "접기.." : "더보기.."}
                    </div> */}
                  </div>
                </div>
                <h6>{review.updated_at}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
