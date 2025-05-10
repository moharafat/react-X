import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      await fetch()
    }
  }, []);
  return <div></div>;
}

export default App;
