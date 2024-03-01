import { MovieCard } from "../components/MovieCard";
import { Fetch } from "../hooks/Fetch";

export const MoviesList = ({apiPath}) => {

  const {data: movies, isLoading, error} = Fetch(apiPath);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies</div>;

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

