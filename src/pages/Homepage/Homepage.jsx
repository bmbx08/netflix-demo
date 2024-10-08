import React from 'react'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import Banner from './components/Banner/Banner'

//1. 배너 -> popular영화 중 첫 번째 아이템 보여주기
//2. popular movie
//3. top rated movie
//4. upcoming movie
const Homepage = () => {

  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <UpcomingMovieSlide/>
      <TopRatedMovieSlide/>
    </div>
  )
}

export default Homepage
