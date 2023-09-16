import React from "react";
import Aux from "../../hoc/Auxilliary";
import classes from "./Layout.module.css";
const layout = (props) => (
  <aux>
    <div className={classes.Content}>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </aux>
);

export default layout;
