import React, { useState } from "react";
import "./style.css";
import Post from "../Post";

export default function Home({ user, setUser }) {
  let post = { kind: "", text: "", src: "" };
  let [update, setUpdate] = useState(false);
  let formHandler = (e) => {
    e.preventDefault();
    if (post.src.endsWith(".mp4") || post.src.endsWith(".mkv"))
      post.kind = "video";
    else if (post.src.endsWith(".jpg") || post.src.endsWith(".png"))
      post.kind = "image";
    else post.kind = "text";
    addPost(post.kind, post.src, post.text);
  };

  let addFreind = (userid) => {
    user.friends.push(userid);
    localStorage.setItem(user.ID, JSON.stringify(user));
  };

  let removeFreind = (userid) => {
    user.friends = user.friends.filter((friend) => friend !== userid);
    localStorage.setItem(user.ID, JSON.stringify(user));
  };

  let addPost = (kind, src, text) => {
    let postsSize = user.posts.length;
    user.posts.push({ id: postsSize, kind: kind, src: src, text: text });
    setUser(user);
    localStorage.setItem(user.ID, JSON.stringify(user));
    setUpdate(!update);
  };

  let updatePost = (id, kind, src, text) => {
    user.posts[id] = { id: id, kind: kind, src: src, text: text };
    localStorage.setItem(user.ID, JSON.stringify(user));
  };

  let removePost = (id) => {
    user.posts.splice(id, 1);
    localStorage.setItem(user.ID, JSON.stringify(user));
  };

  let getData = (e) => {
    post[e.target.name] = e.target.value;
  };

  return (
    <>
      <div className="adding-post posts col-lg-10 col-12 ms-auto">
        <form onSubmit={formHandler} className="form">
          <textarea
            name="text"
            className="form-control p-2"
            placeholder="What do you think of ?"
            onChange={getData}
          ></textarea>
          <label htmlFor="file" className="form-label my-2">
            Upload File
          </label>
          <input
            id="file"
            type="file"
            name="src"
            className="form-control mb-3"
            onChange={getData}
          />
          <button type="submit" className="btn btn-success p-2">
            Add
          </button>
        </form>
      </div>
      <div className="posts col-lg-10 col-12 ms-auto d-flex flex-column align-items-center gap-4">
        {user.posts.map((post) => (
          <Post src={post.src} text={post.text} key={post.id} />
        ))}
      </div>
    </>
  );
}
