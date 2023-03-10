import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Trailer from "./components/Trailer";
import ReviewsPage from "./components/ReviewsPage";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);

      //we set our movies with the data we get back
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getMovies();
  }, []);

  const getSingleMovie = async (movieId) => {
    try {
      const response = await api.get(`api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <ReviewsPage
                movie={movie}
                getMovieData={getSingleMovie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
