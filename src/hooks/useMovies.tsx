import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDBNowResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    async function getMovies() {
        const nowPlayingPromise = movieDB.get<MovieDBNowResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBNowResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBNowResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBNowResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        isLoading,
        ...moviesState
    }
}

export default useMovies
