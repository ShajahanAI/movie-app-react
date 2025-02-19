import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{title: "My Film", release_date: "2025"}}></MovieCard>
      <MovieCard movie={{title: "My Film 2", release_date: "2026"}}></MovieCard>
    </>
  );
}


export default App;
