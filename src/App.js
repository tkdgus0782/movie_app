import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
	state = {
		isLoading: true,
		movies: []
	};

	getMovies = async () => {
		const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
		this.setState(() => {return {movies:movies, isLoading: false}});
	}
	
	componentDidMount(){
		this.getMovies();
	}

	render() {
		const {isLoading, movies} = this.state;
		return(
			<section className="container">
			{isLoading ? (
				<div className="loader">
					<span className="loader_text">Loading....</span>
				</div>) : (
				<div className="movies">
					{movies.map(movie => {
					console.log(movie); 
					return (
						<Movie 
							key={movie.id} 
							id={movie.id} 
							title={movie.title} 
							year={movie.year} 
							summary={movie.summary.slice(0, 140) + '...'}
							poster={movie.medium_cover_image}
							genre={movie.genres}
							/>
					);
						})}	
						</div>)
				
				}
			</section>);
	}
}

export default App;