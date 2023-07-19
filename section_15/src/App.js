import React from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      rawMovies: [], // add this to keep the raw movies data
      isLoading: false,
      language: "en",
      error: null,
    };
    this.fetchMoviesHandler = this.fetchMoviesHandler.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  async fetchMoviesHandler() {
    this.setState({ isLoading: true, error: null });
    let jsonData;
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error(response.status);
      }
      jsonData = await response.json();
      const rawMovies = jsonData.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      this.setState({ rawMovies: rawMovies }, this.updateTranslatedMovies);
    } catch (error) {
      // console.error("Something went wrong!,);
      this.setState({ error: error.message });
    }

    // await this.updateTranslatedMovies();
    this.setState({ isLoading: false });
  }

  async updateTranslatedMovies() {
    this.setState({ isLoading: true });

    const movies = await Promise.all(
      this.state.rawMovies.map(async (movie) => {
        return {
          id: movie.id,
          title: await this.translate(movie.title),
          openingText: await this.translate(movie.openingText),
          releaseDate: movie.releaseDate,
        };
      })
    );
    this.setState({ movies: movies });
    this.setState({ isLoading: false });
  }

  normalizeText(text) {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((paragraph) => paragraph.replace(/\n/g, " "));
  }

  async translate(text) {
    const language = this.state.language;

    // If language is English, don't translate
    if (language === "en") {
      return text;
    }

    // Normalize text and split into paragraphs
    const paragraphs = this.normalizeText(text);

    // Translate each paragraph individually
    const translatedParagraphs = await Promise.all(
      paragraphs.map(async (paragraph) => {
        const apiKey = "REDACTED";
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${paragraph}&lang=en-${language}`;
        let translatedText = paragraph;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          translatedText = data.text[0];
        } catch (error) {
          console.error("Error fetching data:", error);
          return text;
        }
        return translatedText;
      })
    );

    // Join the translated paragraphs back together, with two newlines in between each
    return translatedParagraphs.join("\n\n");
  }

  handleLanguageChange(event) {
    this.setState(
      { language: event.target.value },
      this.updateTranslatedMovies
    );
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <button onClick={this.fetchMoviesHandler}>Fetch Movies</button>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
          </select>
        </section>
        <section>
          {this.state.isLoading ? (
            <p>Loading movie data...</p>
          ) : (
            <MoviesList movies={this.state.movies} />
          )}
          {!this.state.isLoading && !this.state.error && this.state.movies.length === 0 && (
            <p>Try loading some movies.</p>
          )}
          {this.state.error && <p>Error: {this.state.error}</p>}
        </section>
      </React.Fragment>
    );
  }
}
