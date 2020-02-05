import React from 'react';
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

import "./App.css";


class App extends React.Component {
	state = {
		isLoading: true,
		movies: []
	};

	getMoveis = async () => {
		const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
		// this.setState(this.state.movies = movies);
		// this.setState({movies: movies.data.data.movies});
		this.setState({ movies: movies, isLoading: false });
	};

	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({ isLoading: false });
		// }, 5000);

		this.getMoveis();
	};

	render() {
		const { isLoading, movies } = this.state;

		return (
			<session className="contatiner">
				{
					isLoading 
					? <div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
					: <div className="movies">
						{
							movies.map(movie => {
								return (<Movie 
									key={movie.id} 
									id={movie.id} 
									year={movie.year} 
									genres={movie.genres} 
									title={movie.title} 
									summary={movie.summary} 
									poster={movie.medium_cover_image} 
									rating={movie.rating} />);
							})
						}
					</div>
					// movies.map(movie => {
					// 	return (<Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} rating={movie.rating} />);
					// })
				}
			</session>
		);
	};
}

export default App;
