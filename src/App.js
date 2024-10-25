import React, { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 1,
      text: "A short psychic broke out of jail. She was a small medium at large.",
    },
    {
      postNumber: 2,
      text: "A very interesting blog about nothing.",
    },
    {
      postNumber: 3,
      text: "More interesting reading if only I had more time.",
    },
    {
      postNumber: 4,
      text: "Third blog post, I have run out of ideas. Please comment below.",
    },
  ]);
  const [postID, setPostID] = useState(5);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postID,
      text: newText,
    };
    setPostList((postList) => [...postList, newPost]);
    setPostID(postID + 1);
  };

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter((post) => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const posts = postList.map((post) => (
    <Post
      key={post.postNumber}
      text={post.text}
      id={post.postNumber}
      onDelete={handleDeletePost}
    />
  ));

  return (
  <div>
    {posts}
    <AddPost onAdd={handleAddPost}/>
  </div>);
}

export default App;
