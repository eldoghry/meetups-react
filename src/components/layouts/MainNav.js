import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>All Meetups</h1>

      <ul>
        <li>
          <Link to="/"> All Meetups</Link>
        </li>

        <li>
          <Link to="/favorites"> Favourites</Link>
        </li>

        <li>
          <Link to="/new-meetup"> New Meetup</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
