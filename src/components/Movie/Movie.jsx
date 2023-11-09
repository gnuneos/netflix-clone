import {
    MovieContainer,
    MovieInfo,
    MovieInfoText,
    MovieOverview,
    OverviewContent,
    OverviewText,
    OverviewTitle,
    Poster,
    PosterImg,
} from './styles';

function Movie({ movie }) {
    console.log(movie);
    return (
        <MovieContainer>
            <Poster>
                <PosterImg
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    alt={movie.Title}
                />
            </Poster>
            <MovieInfo>
                <MovieInfoText title>{movie.title}</MovieInfoText>
                <MovieInfoText>{movie.vote_average}</MovieInfoText>
            </MovieInfo>
            <MovieOverview>
                <OverviewContent>
                    <OverviewTitle>{movie.title}</OverviewTitle>
                    <OverviewText>{movie.overview}</OverviewText>
                </OverviewContent>
            </MovieOverview>
        </MovieContainer>
    );
}

export default Movie;
