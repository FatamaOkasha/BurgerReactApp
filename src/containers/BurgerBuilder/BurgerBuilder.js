import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 2,
      cheese: 3,
      meat: 0,
    },
  };
  render() {
    return (
      <aux>
        <Burger ingred={this.state.ingredients} />
        <div>
          <BuildControls />
        </div>
      </aux>
    );
  }
}
export default BurgerBuilder;
