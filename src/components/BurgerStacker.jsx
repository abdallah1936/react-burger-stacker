import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack }) => {
    const stackToRender = stack.map((item, i) => {
        return (
            <Ingredient
                key={"stack-" + i}
                item={item}
            />
        );
    });

    return <>{stackToRender.reverse()}</>;
};

export default BurgerStack;
