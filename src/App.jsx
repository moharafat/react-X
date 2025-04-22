import { useState } from "react";
const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 3 },
    { id: 2, title: "batman", ratings: 5 },
  ]);
  const handleClick = () => {
    setMovies(
      movies.map((m) =>
        m.id === 1 ? { ...movies, title: "7ammo el5ateer" } : m
      )
    );
  };
  return (
    <section>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Changename</button>
    </section>
  );
};
export default App;
