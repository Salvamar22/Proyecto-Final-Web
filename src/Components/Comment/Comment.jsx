import React from "react";

const Comment = ({ comment }) => {
    return (
        comment && <div className="font-serif  bg-gray-200 border-solid border-2 border-black rounded-md mt-3  w-96  flex flex-col items-center">
            <div> Usuario: {comment.user.username} </div>
            <div> Descripcion{`: ${comment.description}`} </div>
        </div>
    )
}

export default Comment;