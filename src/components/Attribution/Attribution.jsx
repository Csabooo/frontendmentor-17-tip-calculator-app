import React from "react";
import classes from "./Attribution.module.css";


function Attribution() {
  return (
    <div className={classes.all}>
      <div>
        <span>
          Challenge by
          <a
            className={classes.az}
            href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
            target="_blank"
            rel="noreferrer">
            &nbsp;Frontend Mentor.
          </a>
          &nbsp;Coded by
          <a className={classes.az} href="https://www.frontendmentor.io/profile/Csabooo">
            &nbsp;Csaba Müller.
          </a>
        </span>
      </div>
    </div>
  );
}

export default Attribution;
