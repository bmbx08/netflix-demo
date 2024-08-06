import React from "react";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import {useSearchParams} from "react-router-dom";
import {Alert, Col, Container, Row} from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";

//경로 2가지
//1.nav바에서 클랙해서 온 경우 -> popuarMovie 보여주기
//2.keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch해주기
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  console.log(keyword);

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword});
  console.log("search-data", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
