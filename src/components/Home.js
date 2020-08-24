import React, { useState, useEffect } from "react";
import UploadSection from "./UploadSection";
import Photo from "./Photo";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const images = JSON.parse(localStorage.getItem("images"));
  //   if (images) setPosts(images);
  // }, [posts]);
  useEffect(() => {
    const images = JSON.parse(localStorage.getItem("images"));
    if (images) setPosts(images);
  }, []);

  const addOrRemoveFav = (urlId) => {
    const newPosts = posts;
    for (let key in newPosts) {
      if (newPosts[key].imageUrl === urlId)
        newPosts[key].isFavorite = !newPosts[key].isFavorite;
    }
    setPosts(newPosts);
    localStorage.setItem("images", JSON.stringify(posts));
  };

  return (
    <div className="home">
      <UploadSection posts={posts} setPosts={setPosts} />
      <div className="photos">
        {posts.map((post) => (
          <Photo post={post} addOrRemoveFav={addOrRemoveFav} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
