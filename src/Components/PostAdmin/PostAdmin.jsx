import { useState } from "react";

const PostAdmin = ( { post, onOptions=() => {} } ) => {

    return (
    <div className="font-serif  bg-white border-solid border-2 border-black rounded-md mt-3  w-96 flex flex-col items-center">
        <button onClick={ () => { onOptions(post)}}>Opciones</button>
        <div> Usuario: {post.user.username} </div>
        <img src= {`${post.image}`} alt="Post" />
        <div> Titulo: {post.title} </div>
        <div> Descripcion{`: ${post.description}`} </div>
        <div> Activo{`: ${post.active ? "Si": "No"}`} </div>
    </div>
    )
}

export default PostAdmin;