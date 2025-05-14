import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getdata() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setPosts(data);
    }
    getdata();
  }, []);

  return (
    <div>
      <h1>First post title: </h1>
      {posts.length > 0 ? <h2>{posts[1].title}</h2> : <p>Loading...</p>}
    </div>
  );
};
export default FetchDataEffect;
