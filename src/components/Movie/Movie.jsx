import './Movie.css';

function Movie({ movie }) {
    console.log(movie);
    return (
        <div className="movie">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    alt={movie.Title}
                />
            </div>
            <div className="movie-info">
                <div className="title">{movie.title}</div>
                <div className="rating">{movie.vote_average}</div>
            </div>
            <div className="movie-overview">
                <div className="overview-content">
                    <div className="title">{movie.title}</div>
                    <div className="overview">{movie.overview}</div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
