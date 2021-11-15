import React from 'react';

const Title = ({ text }) => {
   
    return(
        <div class="text-2xl font-light" >
        <label className='title-label'>{text}</label>
        </div>
    )
};

export default Title;