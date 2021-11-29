import { useState } from "react";

const PostAdmin = ( { post, onOptions=() => {} } ) => {

    return (
    <div className="font-serif  bg-gray-200 border-solid border-2 border-black rounded-md mt-3  w-96  flex flex-col items-center">
        <button onClick={ () => { onOptions(post)}}>Opciones</button>
        <div> Usuario: {post.user.username} </div>
        <img className=" rounded-2xl h-52 w-72 "src= {`${post.image}`} alt="Post" />
        <div> Titulo: {post.title} </div>
        <div> Descripcion{`: ${post.description}`} </div>
        <div> Activo{`: ${post.active ? "Si": "No"}`} </div>
    </div>
    )
}

export default PostAdmin;