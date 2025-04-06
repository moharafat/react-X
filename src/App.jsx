const App = () => {
  return (
    <User
      name="7amo"
      age={33}
      isMarried={false}
      hobbies={["coding", "running"]}
    />
  );
};

const User = (props) => {
  console.log(props);
  return <section>
    <h1>Name: {props.name}</h1>
    <h2>age: {props.age}</h2>
    <h3>married?: {props.isMarried}</h3>
    <h3>hobbies: {props.hobbies}</h3>

  </section>;
};

export default App;
