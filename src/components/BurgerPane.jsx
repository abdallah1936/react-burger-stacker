import { Component } from "react";
import BurgerStacker from "./BurgerStacker";

export default class BurgerPane extends Component {
  render() {
    return(
      <>
      <h2>Burger Pane</h2>
      <button
        onClick={this.props.handleClearStack}
      >clear All</button>

      <button
      onClick={this.props.handleRemoveOne}
      >


      </button>

      <BurgerStacker 
      stack= {this.props.stack}
      />
      </>
    )
  }
}