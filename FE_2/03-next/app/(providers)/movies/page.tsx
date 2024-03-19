import MovieCard from "@/app/(providers)/movies/_components/MovieCard";
import Page from "@/components/Page";

export type Movie = {
  id: number;
  title: string;
  description: string;
};

const movies: Movie[] = [
  { id: 1, title: "어벤저스 1", description: "마블의 대표 영화" },
  { id: 2, title: "기생충", description: "오스카상 수상작" },
];

function MoviesPage() {
  return (
    <Page title="영화 목록">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Page>
  );
}

export default MoviesPage;
