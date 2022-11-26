import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../Api/api';
import './Cast.css';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const cast = await getMovieCredits(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, [movieId]);
    return (
        <ul className="actorList">
            {cast.length !== 0 &&
                cast.map(({ id, name, character, profile_path }) => {
                    return (
                        profile_path && (
                            <li className="actorItem" key={id}>
                                <h4>{name}</h4>
                                <img
                                    className="actorImg"
                                    width="100"
                                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                    alt={name}
                                />
                                <p>Character: </p>
                                <p>{character}</p>
                            </li>
                        )
                    );
                })}
        </ul>
    );
}
