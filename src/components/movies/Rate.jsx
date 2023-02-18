const Rate = ({ rating, setRating }) => {
  const stars = (x) => {
    const starArray = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            className="fs-4"
            style={style}
            key={i}
            onClick={(e) => setRating(i)}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            className="fs-4"
            style={style}
            key={i}
            onClick={(e) => setRating(i)}
          >
            &#9734;
          </span>
        );
      }
    }

    return starArray;
  };
  return <div>{stars(rating)}</div>;
};

const style = {
  color: "rgb(245, 164, 66)",
  cursor: "pointer",
};

Rate.defaultProps = {
  setRating: () => {},
};

export default Rate;
