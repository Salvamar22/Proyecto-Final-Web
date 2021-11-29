import React from "react";
import Comment from "../Comment/Comment.jsx"
import PostAdmin from "../PostAdmin/PostAdmin.jsx"

const CommentView = ( {post, onComment = () => {}, children} ) => {
    console.log(post)
    console.log(post.comments)
    return (
        <div className="w-full h-full flex flex-col items-center">
            { children}
            {post.comments.map(
                c  =>  {
                    return c && <Comment key={ c._id } comment={ c }/> 
            })}
            <div className="fixed bottom-0 flex flex-col items-center">
                <input className='regular-style px-2 py-2 w-4/5
                    border-solid border-2 border-black rounded-2xl' type="text" placeholder="Añade un Comentario ..."/>
                <button className="bg-blue-400 text-white py-1 px-2 rounded-md hover:bg-pink-200 font-mono md:font-Cambria text-2xl"
                onClick={ () => { onComment(post)}}>
                    Enviar
                </button>
            </div>
        </div>
    )
}
/*
{post.comments.map(
                c  =>  {
                    return <Comment key={ i++ } post={ c }/> 
            })}
*/
export default CommentView;