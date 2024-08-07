import React, {useState} from "react";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import {useSearchParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../common/Loading/ErrorMessage";

//경로 2가지
//1.nav바에서 클랙해서 온 경우 -> popuarMovie 보여주기
//2.keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch해주기
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  console.log(keyword);

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword,page});
  console.log("search-data", data);

  const handlePageClick = ({selected}) => {
    setPage(selected+1); //질문: page state가 바뀔때마다 api호출이 왜 되는지?
  };

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <ErrorMessage/>;
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
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} //전체 페이지 몇개인지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
