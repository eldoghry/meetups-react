import React from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "./../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    //build meetup object
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetups = { title, image, address, description };

    props.onAddNewMeetup(meetups);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" required ref={imageInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            required
            ref={addressInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button className={classes.btn}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
