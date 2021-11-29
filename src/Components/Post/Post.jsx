import { useState, useEffect } from "react";
import { IoIosHeart } from "react-icons/all";
import { IoChatbubbleEllipses } from "react-icons/all";
import { FaStar } from "react-icons/all";
import { BsThreeDotsVertical } from "react-icons/all";

const Post = ( { post, onOptions=() => {}, onLike=() => {}, onFav=() => {}, onChat=() => {}} ) => {

    return (
    <div className="font-serif w-80  max-w-full bg-white border-solid border-2 border-black rounded-md mt-3 sm:w-96  flex flex-col items-center">
        <div className="w-full flex  py-2 px-3 justify-between"> 
            <span className="text-blue-500 text-2xl ">{post.user.username} </span>
            <button onClick={ () => { onOptions(post) }} >
                <BsThreeDotsVertical className="self-start text-2xl" />
            </button>
        </div>
        <img className=" rounded-2xl h-52 w-72 "src= {`${post.image}`} alt="Post" />
        <b> {post.title} </b>
        <div> {post.description} </div>
        <div> Activo{`: ${post.active ? "Si": "No"}`} </div>
        <div className= "items-start flex justify-evenly w-full h-20 ">
            <button onClick={()=>{onLike(post)}}>
                <IoIosHeart className={`self-start text-2xl m-1 text-red-600`}/>
                { post.likes.length }
            </button>
            <button onClick={()=>{onFav(post)}}>
                <FaStar className="self-start text-2xl m-1 text-yellow-600 " />
            </button>
            <button onClick={()=>{onChat(post)}}>
                <IoChatbubbleEllipses className="self-start text-2xl m-1 text-blue-800"/>
                { post.comments.length}
            </button>
        </div>
    </div>
    )
}

export default Post;