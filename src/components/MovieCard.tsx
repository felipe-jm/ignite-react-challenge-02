import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

type MovieCardProps = {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
};

export const MovieCard = ({
  poster,
  title,
  rating,
  runtime,
}: MovieCardProps) => (
  <div className="movie-card">
    <img src={poster} alt={title} />

    <div>
      <div className="movie-info">
        <span>{title}</span>
        <div className="meta">
          <div>
            <Star /> {rating}
          </div>

          <div>
            <Clock /> {runtime}
          </div>
        </div>
      </div>
    </div>
  </div>
);
