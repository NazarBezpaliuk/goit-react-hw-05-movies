import { useEffect, useState } from 'react';
import { getTrending } from '../../Api/api';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getTrending();
                setMovies(movies);
            } catch (error) {
                console.log(error);
            } finally {
                // console.log('finally');
            }
        };
        fetchMovies();
    }, []);

    return (
        <>
            <h2>Trending now</h2>
            {movies.length !== 0 && <MovieList movies={movies} />}
        </>
    );
}
