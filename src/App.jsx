import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePages from './pages/HomePage/HomePage'
// import MoviesPage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews'
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
  return (
    <>
      <div>
        <Navigation/>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
