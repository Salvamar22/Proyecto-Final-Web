import React from 'react';

const Input = ({attribute, handleChange, param}) =>{
    return(
        <div className="border px-3 py-5 mt- rounded-md hover:outline-none focus:outline-none text-center">
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className='regular-style px-3 py-3'/>
        </div>
    )
};



export default Input;