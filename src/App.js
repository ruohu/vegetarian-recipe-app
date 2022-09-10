import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SingleVegetarianRecipe from './pages/single-vegetarian-recipe/SingleVegetarianRecipe';
import NotFound from './pages/not-found/NotFound';
import Navbar from './components/navbar/Navbar';
import Search from './pages/search/Search';
import ErrorComponent from './components/error/ErrorComponent';
import Cuisine from './pages/cuisine/Cuisine';
import LoadingComponent from './components/loading/LoadingComponent';

function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search/:search" element={<Search />} />
            <Route exact path="/recipe/:id" element={<SingleVegetarianRecipe />} />
            <Route exact path="/cuisine/:name" element={<Cuisine />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
          <LoadingComponent />
          <ErrorComponent />
        </div>
      </Router>
    </div>

  );
}

export default App;
