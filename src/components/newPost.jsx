import classes from "./newPost.module.css";

function NewPost({onAuthorChange, onBodyChange}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p className={classes.actions}>
        <button type="button">Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
