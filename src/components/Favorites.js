import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import "./Home.css";

const Favorites = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const images = JSON.parse(localStorage.getItem("images"));
    setPosts(images.filter((image) => image.isFavorite === true));
  }, []);

  return (
    <div className="not-found">
      {posts.length === 0 ? (
        <h1>No favorite photos 😢</h1>
      ) : (
        <div className="photos">
          {posts.map((post) => (
            <Photo post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
