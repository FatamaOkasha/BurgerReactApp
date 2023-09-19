import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 2,
      cheese: 3,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };
  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    const oldTotalprice = this.state.totalPrice;
    const newTotal = INGREDIENT_PRICES[type] + oldTotalprice;
    // this.state.totalPrice=newTotal;
    this.setState({
      ingredients: updateIngredients,
      totalPrice: newTotal,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    const oldTotalprice = this.state.totalPrice;
    const newTotal = oldTotalprice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newTotal,
    });
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    //{salad:true,bacon:false,cheese:true,meat:false}
    return (
      <aux>
        <Burger ingred={this.state.ingredients} />
        <div>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientremoved={this.removeIngredientHandler}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            disabled={disableInfo}
          />
        </div>
      </aux>
    );
  }
}
export default BurgerBuilder;
