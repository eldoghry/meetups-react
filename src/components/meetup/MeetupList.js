import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} id={meetup.id} />
      ))}
      ;
    </ul>
  );
};

export default MeetupList;
