import { Component } from "react";

export default class Ingredient extends Component {
  render() {
    return(
      <>
      <p
      omnClick={this.props.handleAddToStack}
        style={{
          backgroundcolor: this.props.item.color
        }}
      >{this.props.item}</p>
      </>
    )
  }
}