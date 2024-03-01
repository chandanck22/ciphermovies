import { Routes, Route } from "react-router-dom";
import { MoviesList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="movies/popular" element={<MoviesList />} />
        <Route path="movies/upcoming" element={<MoviesList />} />
        <Route path="movies/top" element={<MoviesList />} />
        <Route path="search" element={<Search />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};
