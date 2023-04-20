import { Component } from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
  render() {
    const listToRender = this.props.items.map((item, i) => {
      return <Ingredient 
        key={'ingred-' + i}
        item={item}
      />
    })
    return(
      <>
      <h2>Ingredient List</h2>
      <form 
      onSubmit={this.props.handleAddOne}
      >
        <lable 
        htmlFor="ingredInput"
        >Add a new Ingredient</lable>
        <input 
          type="text"
          id="indredInput"
          placeholder="add a new ingredient to the list"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <input type="submit" value="submit"/>
      </form>

      {listToRender}
      </>
    )
  }
}