import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";

export const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">

         {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
         ))}

        </div>
      </section>
    </main>
  );
};

