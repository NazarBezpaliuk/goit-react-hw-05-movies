import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';

export default function MovieList({ movies }) {
    const location = useLocation();

    return (
      <ul className="movieList">
        {movies.map(({ id, name, title, poster_path }) => {
          return (
            <li className="movieItem" key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    width="200"
                    height="300"
                  />
                ) : (
                  <img src={'Not Found'} alt={name} width="150" height="200" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
}
