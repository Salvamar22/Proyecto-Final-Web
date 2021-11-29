import { useState } from "react";
import { IoIosHeart } from "react-icons/all";
import { IoChatbubbleEllipses } from "react-icons/all";
import { FaStar } from "react-icons/all";
const PostAdmin = ( { post, onOptions=() => {} } ) => {

    return (
    <div className="font-serif  bg-white border-solid border-2 border-black rounded-md mt-3  w-96  flex flex-col items-center">
        <button onClick={ () => { onOptions(post)}}>Opciones</button>
        <div> Usuario: {post.user.username} </div>
        <img className=" rounded-2xl h-52 w-72 "src= {`${post.image}`} alt="Post" />
        <div> Titulo: {post.title} </div>
        <div> Descripcion{`: ${post.description}`} </div>
        <div> Activo{`: ${post.active ? "Si": "No"}`} </div>
        <div className= "items-center flex justify-evenly w-full mt-3 h-10 ">  
        <IoIosHeart className="self-start text-2xl m-1 text-red-600 " />
        <FaStar className="self-start text-2xl m-1 text-yellow-600 " /> 
        <IoChatbubbleEllipses className="self-start text-2xl m-1 text-blue-800 " />
        </div>
    </div>
    )
}

export default PostAdmin;