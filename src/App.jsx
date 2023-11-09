import { movies } from './movieDummy';
import './App.css';
import Movie from './components/Movie/Movie';

function App() {
    return (
        <div className="App">
            <div className="app-container">
                {movies.results.map((item) => (
                    <Movie movie={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
