import React, {useState} from "react";
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../common/Loading/ErrorMessage";
import Pagination from "./components/Pagination/Pagination";
import PopularDropdown from "./components/DropdownSection/PopularDropdown";
import GenreDropdown from "./components/DropdownSection/GenreDropdown";
import {useMovieGenreQuery} from "../../hooks/useMovieGenre";

//경로 2가지
//1.nav바에서 클랙해서 온 경우 -> popuarMovie 보여주기
//2.keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch해주기

// Genres=[
//   "Action","Adventure","Animation","Comedy"
// ]

const MoviePage = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const popKeyword = query.get("sort_popularity");
  const genreKeyword = query.get("sort_genre");
  console.log(keyword);
  console.log(popKeyword);

  let {data, isLoading, isError, error} = useSearchMovieQuery({
    keyword,
    page,
  });
  const {data: genreData} = useMovieGenreQuery();
  console.log("search-data", data);

  if (popKeyword === "most") {
    //영화 데이터를 가장 인기부터 정렬
    data?.results.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    console.log("inc popularity data", data?.results);
  }

  if (popKeyword === "least") {
    //영화 데이터를 가장 인기 없음 부터 정렬
    data?.results.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    console.log("dec popularity data", data?.results);
  }

  //쿼리 단어랑 장르데이터에서 같은 이름의 id값을 가져온다.
  //data중 같은 genre id를 가진 movie들을 data에 다시 넣는다
  //같은 genreid를 가진 movie들을 찾아 배열에 담는다.
  if (genreKeyword !== null) {
    let genreObj = genreData?.find((genre) => genre?.name === genreKeyword);
    let genreId = genreObj?.id;
    console.log(genreId);
    console.log(data);
      data.results=data?.results.filter((movie) => {
        return movie?.genre_ids.some((genre) => genre === genreId);
      });
      console.log("genre sorted data", data);
  }

  const handlePageClick = ({selected}) => {
    setPage(selected + 1); //질문: page state가 바뀔때마다 api호출이 왜 되는지? -> state가 바뀔때마다 rerender되기 때문
  };

  console.log(data);

  if (isLoading) {
    return <LoadingSpinner version="version1" />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {/* 필터 */}
          <h2 className="text-center">Sort By..</h2>
          <div>
            <PopularDropdown keyword={keyword}/>
            <GenreDropdown keyword={keyword} />
          </div>
          
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="pagination-container">
          <Pagination
            handlePageClick={handlePageClick}
            data={data}
            page={page}
          />
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;

//아쉬운 점: 장르/인기별 정렬은 페이지마다만 정렬됨.
