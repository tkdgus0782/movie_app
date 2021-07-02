import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genre}){
	return (<div className="movie">
				<img src={poster} alt={title} title={title}></img>
				<div className="movie_data">
					<h1 className="movie_title">{title} ({year})</h1>
					<br></br>
					<ul className="movie_genre">{genre.map((current, i) => (
							<li className="genre_item" key={i}>{current}</li>))}</ul>
					<br></br>
					<p className="movie_summary">{summary}</p>
					<br></br>
				</div>
				
			
			
			
		</div>);
}

Movie.propTypes = {
	id: PropTypes.number,
	year: PropTypes.number,
	title: PropTypes.string,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genre: PropTypes.string
};

export default Movie;