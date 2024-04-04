import { useState } from "react";

import classes from "./newPost.module.css";

function NewPost({onCancel, onAddPost}) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function submitHandler(e){
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
      id: Math.floor(Math.random() * 1024)
    };
    onAddPost(postData);
    console.log(postData);
    onCancel();
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
