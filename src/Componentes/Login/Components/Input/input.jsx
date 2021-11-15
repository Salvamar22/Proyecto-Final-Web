import React from 'react';


const Input = ({attribute, handleChange, param}) =>{
    return(
        <div class="border w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none ">
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className='regular-style'
            />
        </div>
    )
};



export default Input;