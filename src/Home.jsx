import AddMovie from "./components/movies/AddMovie";
import Filter from "./components/movies/Filter";
import MovieList from "./components/movies/MovieList";

function Home({ title, setTitle, rating, setRating, addMovie, moviesData }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />

          <AddMovie addMovie={addMovie} />
          <MovieList moviesData={moviesData} title={title} rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default Home;
