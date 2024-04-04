import { useState } from "react";

import Post from "./post.jsx";
import NewPost from "./newPost.jsx";
import Modal from "./modal.jsx";
import classes from "./postsList.module.css";

function PostList({isPosting, onStopPosting}) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={"aaa"} body={"bbb"} />
      </ul>
    </>
  );
}

export default PostList;
