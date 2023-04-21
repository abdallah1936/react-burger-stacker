import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ items, handleAddToStack, handleAddOne, input, handleChange }) => {
    const listToRender = items.map((item, i) => {
        return (
            <Ingredient
                key={"ingred-" + i}
                item={item}
                handleAddToStack={handleAddToStack}
            />
        );
    });

    return (
        <>
            <h2>IngredientList</h2>
            <form onSubmit={handleAddOne}>
                <label htmlFor="ingredInput">Add a new ingredient:</label>
                <input
                    type="text"
                    id="ingredInput"
                    placeholder="add a new ingredient to the list"
                    value={input}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>

            {listToRender}
        </>
    );
};

export default IngredientList;
