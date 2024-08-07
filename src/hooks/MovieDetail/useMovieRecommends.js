import { useQuery } from "@tanstack/react-query"
import api from "../../utils/api"

const fetchMovieRecommends=(id)=>{
    return api.get(`/movie/${id}/recommendations`)
}

export const useMovieRecommendsQuery=(id)=>{
    return useQuery({
        queryKey:["movie-recommends",id],
        queryFn:()=>fetchMovieRecommends(id),
        select:(result)=>result.data,
    })
}
