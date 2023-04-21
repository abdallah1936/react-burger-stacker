import React from 'react';

const Ingredient = ({ item, handleAddToStack }) => {
    return (
        <>
            <p
                onClick={() => handleAddToStack(item)}
                style={{
                    backgroundColor: item.color,
                }}
            >
                {item.name}
            </p>
        </>
    );
};

export default Ingredient;
