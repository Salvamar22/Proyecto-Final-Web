import React from 'react';

const Label =({text}) => {
    return (
        <div class=" mt-2 block font-mono md:font-Cambria text-2xl
        text-center"
        >
            <label>{text}</label>
        </div>
    )
};

export default Label;