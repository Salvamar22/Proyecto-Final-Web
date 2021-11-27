import { useEffect, useState, useRef } from "react";

const Options = ( { options, onClickOutside=() => {}} ) => {

    let i = 0;
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            onClickOutside();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
    <div ref={ myRef } className={`fixed bottom-0 w-full flex flex-col items-center bg-green-500 text-white`}>
        {
            options.map(
            option  =>  {
                return <button className="w-full" key={i++} onClick={ option.action}> { option.text } </button>
                }
            )
        }
    </div>
    )
}

export default Options;