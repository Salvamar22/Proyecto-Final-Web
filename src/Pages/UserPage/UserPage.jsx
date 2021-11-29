import React from "react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSessionContext } from "../../Contexts/SessionContext.js";
import userServices from "../../Services/user.services.js";
import Options from "../../Components/Options/Options.jsx";
import TabContainer from "../../Components/TabContainer/TabContainer.jsx";
import PostContainer from "../../Components/PostContainer/PostContainer.jsx";
import CommentView from "../../Components/CommentView/CommentView.jsx";
import Post from "../../Components/Post/Post.jsx";

const nullPost = {
    _id: 0,
    title: "",
    description: "",
    image: null,
    active: false,
    createdAt: null,
    user: { username: ""},
    likes: []
};

const UserPage = () => {
    
    const { token, user, logout} = useSessionContext();
    const [ selectedPost, setSelectedPost ] = useState(nullPost);
    const [ allPosts, setAllPosts ] = useState([]);
    const [ favs, setFavs ] = useState([]);
    const [ favPosts, setFavPosts ] = useState([]);
    const [ showOptions, setShowOptions ] = useState(false);  
    const [ page, setPage] = useState(0);  
    const [ tabController, setTabController] = useState(0);

    const favorites = async (favs) => {
        return await Promise.all(favs.map(async (fId) => {
            return await userServices.getOne(token, fId)})
        );
    }
    useEffect( async () => {
        if(token) { //61a413c6f81b159c2fa9dd80
            //console.log(await userServices.like(token,   "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.fav(token,    "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.getOne(token, "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.comment(token,"61a414c9f81b159c2faa38b0", "Buen post"));
            //const f = await Promise.all(favs.map(async (fId) => { return await userServices.getOne(token, fId) }));
            //console.log(f);
            let res = await userServices.getAll(token, 10, page);
            setAllPosts( res);
            console.log(res);
        }
    }, [token, page])

    useEffect( async () => {
        if(token) {
            const res = await userServices.getFavorites(token);
            setFavs(res);
        }
    }, [token])

    useEffect( async () => {
        let u = await favorites(favs);
        setFavPosts(u)
        console.log(favPosts);
    }, [favs])

    const onOptions = async (post) => {
        /*new Promise((resolve, reject)=>{
            setSelectedPost(post);
            resolve();
        })
        .then( res=> {
        console.log("Jojos life");
        console.log("Espero funcione" );
        console.log(selectedPost.active);
        setShowOptions(true);})*/
        setSelectedPost(post);
        console.log(post);
        setShowOptions(true);
        console.log(selectedPost);
    }
    const hideOptions = () => { setShowOptions(false)};
    
    const onLikeHandler = async (post, set) => {
        console.log("Dando like");
        setSelectedPost(post);
        console.log(post);
        setShowOptions(false);

        let res = await userServices.like(token, post._id);
        if( res) {
            const updatePost = await userServices.getOne(token, post._id);
            selectedPost.likes = await updatePost.likes;
            post.likes = await updatePost.likes;
            post = await updatePost;
            setSelectedPost(updatePost);
            console.log(post);
        }
        else
            console.log("No se pudo likear");
    }

    const onFavHandler = async (post) => {
        console.log(post);
        setSelectedPost(post);
        setShowOptions(false);
        let id = post._id;
        let res = await userServices.fav(token, id);
        if(res) {
            console.log(await res);

            res = await userServices.getFavorites(token);
            setFavs(await res)
        }
        else
            console.log("No se pudo dar favorito");
    }

    const onSeeCommentsHandler = (post) => {
        setSelectedPost(post);
        setTabController(2);
        setShowOptions(false);
    }

    const onCommentHandler = async (post, description) => {
        setSelectedPost(post);
        console.log("comment");
        console.log(post);
        console.log( description); 
        const res = await userServices.comment(token, post._id, description);
        //console.log(await userServices.getOne(token, "61a414c9f81b159c2faa38b0"))
        //selectedPost.comments.push({ _id: , user: { username: user.username}, description: description});
        
        console.log(await res);
        if( await res) {
            const updatePost = await userServices.getOne(token, post._id);
            selectedPost.comments = await updatePost.comments;
            setSelectedPost(updatePost)
        }
        else
            console.log("No se pudo comentar");
    }
    /*
                
    */
    return (
        <div className="min-h-screen text-center flex flex-col font-mono md:font-Cambria  w-full bg-gray-300 h-full relative">
            
            <div className="w-full flex flex-wrap justify-around mx-auto bg-blue-500 text-white py-2 px-3 md:font-Cambria text-xl ">
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ setTabController(0)}}>Ver todos</button>
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ setTabController(1)}}>Ver favoritos</button>
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ logout()}}>Logout</button>
            </div>
            
            <TabContainer className="" tabIndex={0} tabController={tabController}>

                <div className="w-4/5 flex justify-between mx-auto mt-4">
                    <button className="text-gray-400 self text-lg hover:text-gray-700 mb-2"  onClick={ () => { if(page) setPage(page - 1)}}>
                        <FaArrowLeft className=" text-xl"/>
                    </button>
                    <button className="text-gray-400 self text-lg hover:text-gray-700 mb-2"  onClick={ () => { setPage(page + 1)}}>
                        <FaArrowRight className=" text-xl"/>
                    </button>
                </div>

                <PostContainer posts={ allPosts } onOptions={ onOptions}
                        onLike={ onLikeHandler} onFav={ onFavHandler} onChat={ onSeeCommentsHandler}/>

                <div className="w-4/5 flex justify-between mx-auto">
                    <button className="text-gray-400 self text-lg hover:text-gray-700 mb-2"  onClick={ () => { if(page) setPage(page - 1)}}>
                        <FaArrowLeft className=" text-xl"/>
                    </button>
                    <button className="text-gray-400 self text-lg hover:text-gray-700 mb-2"  onClick={ () => { setPage(page + 1)}}>
                        <FaArrowRight className=" text-xl"/>
                    </button>
                </div>
            </TabContainer>

            <TabContainer className="" tabIndex={1} tabController={tabController}>

                <PostContainer posts={ favPosts } onOptions={ onOptions}
                    onLike={ onLikeHandler} onFav={ onFavHandler} onChat={ onSeeCommentsHandler}/>
            </TabContainer>

            <TabContainer className="" tabIndex={2} tabController={tabController}>
                <CommentView post={selectedPost} onComment={onCommentHandler}>
                    <Post post={ selectedPost } onOptions={ onOptions}
                        onLike={ onLikeHandler} onFav={ onFavHandler} onChat={ onSeeCommentsHandler}/>
                </CommentView>
            </TabContainer>

            { showOptions && <Options options={[
                { text: "Dar like", action: () => onLikeHandler(selectedPost)},
                { text: "Favorito", action: () => onFavHandler(selectedPost)},
                { text: "Ver Comentarios", action: () => onSeeCommentsHandler(selectedPost)},
                { text: "Cancelar", action: () => { setShowOptions(false) }}
                ]}
                onClickOutside= { hideOptions}/>
            }
        </div>
    );
}

export default UserPage;
