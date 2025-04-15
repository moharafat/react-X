import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // };
    setMovie({ ...movie, ratings: 6 });
  };

  return (
    <section>
      <h1>Movie:{movie.title}</h1>
      <p>Rating: {movie.ratings}</p>
      <button onClick={handleClick}>CHANGE THE RATING</button>
    </section>
  );
};
export default App;
