import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, title, year, genres, summary, poster }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          title,
          year,
          genres,
          summary,
          poster
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h2 className="movie__title">{title}</h2>
          <span className="movie__year">{year} / </span>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="movie__genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 500)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
