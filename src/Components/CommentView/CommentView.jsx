import React from "react";
import Comment from "../Comment/Comment.jsx"

const CommentView = ( {post, onComment = () => {}, children} ) => {
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        
        onComment(post, data.get("description") );
    }
    console.log(post)
    return (
        <div className="w-full h-full flex flex-col items-center pb-12">
            { children}
            {post.comments.map(
                c  =>  {
                    return c && <Comment key={ c._id } comment={ c }/> 
            })}

            <form onSubmit={ onSubmitHandler } className="fixed bottom-0 flex items-center w-full sm:w-4/5 justify-center text-xl">
                <input name="description" className='regular-style px-2 py-1 w-full sm:w-4/5
                    border-solid border-t-2 border-l-2 border-b-2 border-black rounded-l-md' type="text" placeholder="Añade un Comentario ..."/>
                <button type="submit" className="bg-blue-400 text-white border-solid border-black border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-md hover:bg-pink-200 font-mono md:font-Cambria text-xl"
                    onClick={ () => { onComment(post)}}>
                    Enviar
                </button>
            </form>
        </div>
    )
}
/*
{post.comments.map(
                c  =>  {
                    return c && <Comment key={ c._id } comment={ c }/> 
            })}
*/
export default CommentView;