import React from "react";
import NewMeetupForm from "../meetup/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
  const history = useHistory();

  function saveMeetupDB(meetups) {
    //save new meetup on firebase DB

    fetch(
      "https://meetups-react-4fcfb-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetups),
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddNewMeetup={saveMeetupDB} />
    </div>
  );
};

export default NewMeetup;
