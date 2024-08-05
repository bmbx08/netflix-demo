import React from 'react'
import api from '../utils/api';
import { useQuery } from '@tanstack/react-query';

const fetchTopRatedMovies = ()=>{
    return api.get('/movie/top_rated')
}

export const useTopRatedMoviesQuery = ()=> {
    return useQuery({
        queryKey:["movie-top-rated"],
        queryFn: fetchTopRatedMovies,
        select:(result)=>result.data
    });
};