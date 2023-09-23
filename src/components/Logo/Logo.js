import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/28.1 burger-logo.png";
const logo = (props) => (
  <div className={classes.logo} style={{ height: props.height }}>
    <img src={burgerLogo} width="100" height="60" alt="MyBurger" />
  </div>
);
export default logo;
