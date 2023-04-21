import "./App.css";
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
import { useState } from "react";

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
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
];

export default function App() {
    const [ingredients, setIngredients] = useState(ingredientsArr);
    const [stack, setStack] = useState([]);
    const [input, setInput] = useState("");

    const handleAddToStack = (newIngredient) => {
        setStack([newIngredient, ...stack]);
    };

    const handleClearStack = () => {
        setStack([]);
    };

    const handleRemoveOne = () => {
        let index = stack.length - 1;
        console.log("remove =>", stack[index]);
        setStack(stack.filter((item, i) => i !== index));
    };

    const handleAddOne = (e) => {
        e.preventDefault();
        console.log(ingredients, e.target[0].value);
        const ingredToAdd = {
            name: e.target[0].value,
            color: "#FFFFFF",
        };
        console.log("new =>", ingredToAdd);
        setIngredients([...ingredients, ingredToAdd]);
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <h1>Burger Stacker</h1>
            <IngredientList
                items={ingredients}
                handleAddToStack={handleAddToStack}
                handleAddOne={handleAddOne}
                input={input}
                handleChange={handleChange}
            />
            <BurgerPane
                stack={stack}
                handleClearStack={handleClearStack}
                handleRemoveOne={handleRemoveOne}
            />
        </>
    );
}
