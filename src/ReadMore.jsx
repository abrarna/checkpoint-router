import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { moviesData } from "./data";
const ReadMore = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = moviesData.find((el) => el.id === Number(id));

  const onClick = (e) => navigate("/");

  return (
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>

      <p className="card-text">{movie.description}</p>

      <button className="btn btn-primary" onClick={onClick}>
        Go Back
      </button>
    </div>
  );
};

export default ReadMore;
