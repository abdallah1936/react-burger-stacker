import { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerStacker extends Component {
  render() {
    const stackToRender = this.props.stack.map((item, i) => {
      return <Ingredient 
        key={'stack-'+ i}
        item={item}
      />
    })
    return(
      <>
        {stackToRender.reverse()}
      </>
    )
  }
}