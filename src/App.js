import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setIsEmpty(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {
        // rendering 4 skeleton cards when posts array is empty
        isEmpty && [1, 2, 3, 4].map((value) => <Skeleton key={value} />)
      }
      {
        //rendering actual cards when posts array is populated with some data
        isEmpty ||
          posts.map((post) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))
      }
    </>
  );
}
