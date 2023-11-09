import { movies } from './movieDummy';
import Movie from './components/Movie/Movie';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #23254a;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 60px;
    gap: 16px;
`;

function App() {
    return (
        <div className="App">
            <Container>
                {movies.results.map((item) => (
                    <Movie movie={item} key={item.id} />
                ))}
            </Container>
        </div>
    );
}

export default App;
