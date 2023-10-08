import Movie from "./components/Movie/Movie";
import { movies } from "./movieDummy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <Movie movie={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
