import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Alex", "john"]);
  const addOneFriend = () => setFriends([...friends, "7ammmo"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "john"));
  const update1Friend = () => {
    setFriends(friends.map(f => f=== 'Alex' ? 'Alex Smith' : f))
    }
  
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add new Friend</button>
      <button onClick={removeFriend}>Remove john</button>
      <button onClick={update1Friend}>update 1 friend</button>
    </section>
  );
};

export default App;
