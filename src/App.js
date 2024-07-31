import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './layout/AppLayout';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 홈페이지  /
// 영화 전체 보여주는 페이지(search 가능)  /movies
// 영화 디테일 페이지  /movies/:id

function App() {
  return (
      <Routes>
        <Route path="/" element={<AppLayout/>}> {/* 안에 있는 3개의 route는 다 Applayout(내브바)를 공통으로 가진다. */}
          <Route index element={<Homepage/>}/>  {/* Route의 자식요소로 Route를 넣으면 index는 같은 path를 갖는다는 뜻이다. */}
          <Route path="movies"> 
            <Route index element={<MoviePage/>}/> {/* nested route를 통해 이렇게 작성할 수도 있다. */}
            <Route path=":id" element={<MovieDetailPage/>}/>
          </Route>
          {/* <Route path="/movies" element={<MoviePage/>}/>
          <Route path="/movies/:id" element={<MovieDetailPage/>}/> */}
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
