import React from "react";
import classses from "./NavigationItem.module.css";
const navigationItem = (props) => (
  <ul className={classses.navigationItem}>
    <li>
      <a href={props.link} className={props.active ? classses.active : null}>
        {props.children}
      </a>
    </li>
  </ul>
);
export default navigationItem;
