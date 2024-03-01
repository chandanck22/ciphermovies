import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { Fetch } from "../hooks/Fetch";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {data: movies} = Fetch(apiPath, query);


  return (
    <main>
      <section>
        <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">{ movies.length === 0 ? `No result found for ${query}` : `Search result is ${query}`}</h1>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">

         {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
         ))}

        </div>
      </section>
    </main>
  )
}
