import React from 'react';

const Title = ({ text }) => {
   
    return(
        <div class="mt-3 text-2xl  font-mono text-center" >
        <label className='title-label'>{text}</label>
        </div>
    )
};

export default Title;