import React from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  constructor() {
    super();
    const userLanguage = navigator.language.split("-")[0]; // get the language part before region

    this.state = {
      movies: [],
      rawMovies: [], // add this to keep the raw movies data
      isLoading: false,
      language: userLanguage || "en",
      error: null,
    };
    this.fetchMoviesHandler = this.fetchMoviesHandler.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesHandler();
  }

  //instead of useCallback, we can use bind(this) in the constructor
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
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${paragraph}&lang=en-${language}`;
        let translatedText = paragraph;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          translatedText = data.text[0];
        } catch (error) {
          this.setState({ error: error.message });
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
    let content = null;

    if(this.state.isLoading) {
      content = <p>Loading movie data...</p>;
    } else if(this.state.error) {
      content = <p>Error: {this.state.error}</p>;
    } else if(this.state.movies.length > 0) {
      content = <MoviesList movies={this.state.movies} />;
    } else {
      content = <p>Try loading some movies.</p>;
    }

    return (
      <React.Fragment>
        <section>
          {/* <button onClick={this.fetchMoviesHandler}>Fetch Movies</button> */}
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
          {content}
        </section>
      </React.Fragment>
    );
  }
}
