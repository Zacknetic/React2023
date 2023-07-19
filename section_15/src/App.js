import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
    this.fetchMoviesHandler = this.fetchMoviesHandler.bind(this);
  }

  async fetchMoviesHandler() {
    let jsonData;
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    const movies = jsonData.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    this.setState({ movies: movies });
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <button onClick={this.fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          <MoviesList movies={this.state.movies} />
        </section>
      </React.Fragment>
    );
  }
}
