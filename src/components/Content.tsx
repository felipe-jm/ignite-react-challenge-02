import { MovieProps } from "../App";
import { GenreResponseProps } from "./SideBar";

import { MovieCard } from "../components/MovieCard";

import "../styles/content.scss";

type ContentProps = {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
};

export const Content = ({ movies = [], selectedGenre }: ContentProps) => (
  <div className="container">
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </div>
);
