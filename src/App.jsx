import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Celebrity from './pages/Celebrity';

function App() {
    return (
        <div className="root-wrap">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/movies" element={<Movies />} />
                <Route exact path="/tv" element={<TV />} />
                <Route exact path="/celebrity" element={<Celebrity />} />
            </Routes>
        </div>
    );
}

export default App;
