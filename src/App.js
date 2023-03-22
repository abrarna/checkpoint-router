import "./styles.css";
import Home from "./Home";
import { useState } from "react";
import { moviesData } from "./data";
import ReadMore from "./ReadMore";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);

  const addMovie = (newMovie) => {
    // console.log(newMovie);
    moviesData.push(newMovie);
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              moviesData={moviesData}
              title={title}
              setTitle={setTitle}
              rating={rating}
              setRating={setRating}
              addMovie={addMovie}
            />
          }
        />
        <Route path="/moviesData/:id" element={<ReadMore />} />
      </Routes>
    </div>
  );
};

export default App;
