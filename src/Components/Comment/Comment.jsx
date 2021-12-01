import React from "react";

const Comment = ({ comment }) => {
    return (
        comment && <div className="font-serif  bg-gray-200 border-solid border-2 border-black rounded-md mt-3  w-72 sm:w-96  flex flex-col items-center">
            <div  className="text-blue-500 text-xl "> {comment.user.username} </div>
            <div> {comment.description} </div>
        </div>
    )
}

export default Comment;