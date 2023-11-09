import styled from 'styled-components';
import { movies } from '../movieDummy';
import Movie from '../components/Movie/Movie';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 60px;
    gap: 16px;
`;

function Movies() {
    return (
        <Container>
            {movies.results.map((item) => (
                <Movie movie={item} key={item.id} />
            ))}
        </Container>
    );
}

export default Movies;
