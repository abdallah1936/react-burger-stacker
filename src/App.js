import React, { Component } from "react"
import BrugerStacker from "./components/BurgerStacker"
import BurgerPane from "./components/BurgerPane"
import IngredientList from "./components/IngredientList"

const ingredientsArr = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Beef Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];


export default class App extends Component {
  state = {
    stack: [],
    ingredList: [...ingredientsArr],
    input: ""
  }

  handleAddToStack = (e) => {
    console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
    const newStackIngredient = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor
    }
    this.setState(prevState => {
      const stack = [...prevState.stack,
      newStackIngredient]
      return{stack}
    })
  }

handleClearStack = () => {
  this.setState({
    stack: []
  })
}

handleRemoveOne = () => {
  //what if stack.lenght == 0?
  //get index of final element on the stack
  let start = this.state.stack.length - 1
  console.log("remove =>", this.state.stack[index])
  this.setState({
    stack: this.state.stack.filter((item, i) => {
      return i !== index
    })
  })
}

handleAddOne = () => {
  e.preventDefault()
  console.log(this.state.ingredList, e.target)
  const ingredToAdd = {
    name: e.target.value,
    color: "#FFFFFF"
    }
    this.setState({
      input:"",
      ingredList: [...this.state.ingredList, ingredToAdd]
    })
}

handleChange =(e) => {
  this.setState({
    input: e.target.value
  })
}

  render() {
    return (
      <div>
      <h1>Burger stacker</h1>
      <IngredientList 
        items={ingredientsArr}
        handleAddToStack={this.handleAddToStack}
        handleAddOne={this.handleAddOne}
        handleChange={this.handleChange}
        input={this.state.input}
      />
      <BurgerPane 
      stack={this.state.stack}
      handleClearStack={this.handleClearStack}
      handleRemoveOne={this.handleRemoveOne}
      />
    </div>
    )
  }
  }