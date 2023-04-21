import React from 'react';
import BurgerStack from './BurgerStacker';

const BurgerPane = ({ handleClearStack, handleRemoveOne, stack }) => {
    return (
        <>
            <h2>BurgerPane</h2>
            <button onClick={handleClearStack}>Clear All</button>
            <button onClick={handleRemoveOne}>Clear One</button>
            <BurgerStack stack={stack} />
        </>
    );
};

export default BurgerPane;
