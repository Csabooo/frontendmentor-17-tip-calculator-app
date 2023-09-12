import React from "react";
import classes from "./Attribution.module.css";


function Attribution() {
  return (
    <div>
      <div className="text-center ext-[12px]">
        <span>
          Challenge by
          <a
            className={classes}
            href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
            target="_blank"
            rel="noreferrer">
            &nbsp;Frontend Mentor.{" "}
          </a>
          &nbsp;Coded by
          <a className="" href="https://www.frontendmentor.io/profile/Csabooo">
            &nbsp;Csaba Müller.
          </a>
        </span>
      </div>
    </div>
  );
}

export default Attribution;
