import React from "react";
import PropTypes from "prop-types";

import "./Movie.css";

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function Movie({ id, year, genres, title, summary, poster, rating }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <h3 className="movie__title">{title}</h3>
            {/* <h4 className="movie__genres">{genres}</h4> */}
            <h5 className="movie_year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => (<li key={index} >{genre}</li>))}</ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    );
};

export default Movie;