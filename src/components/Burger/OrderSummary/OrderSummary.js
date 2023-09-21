import React from "react";
import Aux from "../../../hoc/Auxilliary";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ TextTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order </h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout ? </p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};
export default orderSummary;