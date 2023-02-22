import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import css from './Reviews.module.css';

import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(id);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className={css.reviewBox}>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p className={css.reviewText}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {/* )} */}
    </>
  );
};

export default Reviews;
