import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../Api/api';
import './Reviews.css';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const reviews = await getMovieReviews(movieId);
                setReviews(reviews);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, [movieId]);

    return (
        <ul className="rewievsList">
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie</p>
            ) : (
                reviews.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p> {content}</p>
                        </li>
                    );
                })
            )}
        </ul>
    );
}
