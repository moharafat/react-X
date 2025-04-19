import { useState } from "react";
const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman" },
    { id: 2, title: "batman" },
  ]);
  const handleClick = () => {
    setMovies(movies.map(m =>))
  }
  return (
    <section>
      {movies.map((m) => (
        <li key={Math.random}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Changename</button>
    </section>
  );
};
export default App;
