const Button = () => {
  const handleClick =() => console.log(Math.round(Math.random() * 1000))
  return <button onClick={handleClick}>Don't</button>;
};

const App = () => {
  return (
    <section>
      <Button />
    </section>
  );
};

export default App;
