import { useEffect, useState } from 'react';
import { searchMovie } from '../../Api/api';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import './Movies.css';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!query) return;
        const fetchMovies = async () => {
            try {
                const movies = await searchMovie(query);
                setMovies(movies);
            } catch (error) {
                console.log(error);
            } finally {
                // console.log('finally');
            }
        };
        fetchMovies();
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: e.target.elements.query.value });
        e.target.reset();
    };
    return (
        <>
            <h2>Find movie by name</h2>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input
                    className="searchInput"
                    placeholder="put in movie name"
                    name="query"
                    type="text"
                />
                <button className="searchBtn">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </>
    );
}
