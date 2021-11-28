import React from 'react';

const Label =({text}) => {
    return (
        <div className=" mt-3 block font-mono md:font-Cambria text-xl text-center">
            <label>{text}</label>
        </div>
    )
};

export default Label;