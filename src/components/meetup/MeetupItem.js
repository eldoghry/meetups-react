import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img src={props.meetup.image} className={classes.image}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <span>{props.meetup.description}</span>
        </div>
        <div className={classes.actions}>
          <button> Add to Favoriate</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
