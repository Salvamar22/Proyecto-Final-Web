import React from "react";
import { useSessionContext } from "../../contexts/SessionContext.js";
import { useEffect, useState } from "react";
import userServices from "../../Services/user.services.js";
import Options from "../../Components/Options/Options.jsx";
import CommentView from "../../Components/CommentView/CommentView.jsx";
import TabContainer from "../../Components/TabContainer/TabContainer.jsx";
import PostContainer from "../../Components/PostContainer/PostContainer.jsx";

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
    
    const { token, user} = useSessionContext();
    const [ selectedPost, setSelectedPost ] = useState(nullPost);
    const [ allPosts, setAllPosts ] = useState([]);
    const [ favs, setFavs ] = useState([]);
    const [ favPosts, setFavPosts ] = useState([]);
    const [ showOptions, setShowOptions ] = useState(false);   
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
            console.log(await userServices.getOne(token, "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.comment(token,"61a414c9f81b159c2faa38b0", "Buen post"));
            const ress = await userServices.getFavorites(token);
            setFavs(ress);
            //const f = await Promise.all(favs.map(async (fId) => { return await userServices.getOne(token, fId) }));
            //console.log(f);
            let res = await userServices.getAll(token, 20, 0);
            setAllPosts( res);
            console.log(res);
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
    
    const onLikeHandler = async (post) => {
        setShowOptions(false)
        let res = await userServices.like(token, selectedPost._id);
        if(res) {
            console.log(await res);
            if( selectedPost.likes.includes(user.username)) {
                selectedPost.likes.remove({ username: user.username})
            }
            else {
                selectedPost.likes.push({ username: user.username})
            }
        } else {
            console.log("No se pudo dar like");
        }

    }

    const onFavHandler = async (post) => {
        setShowOptions(false);
        let id = selectedPost._id;
        let res = await userServices.fav(token, id);
        if(res) {
            console.log(await res);

            if( favs.includes(id)) {
                setFavs( favs.filter((i)=>{return i!==id}));
            }
            else {
                setFavs([...favs, id])
            }
        }
        else
            console.log("No se pudo dar like");
    }
    
    return (
        <div className="w-full min-h-screen">
            <TabContainer className="" tabIndex={0} tabController={tabController}>

                <button onClick={()=>{ setTabController(1)}}>Ir a favoritos</button>

                <PostContainer posts={ allPosts } onOptions={ onOptions}/>
                { showOptions && <Options options={[
                    { text: "Dar like", action: onLikeHandler},
                    { text:  "Favorito", action: onFavHandler},
                    { text: "Ver Comentarios", action: () => { setTabController(2) }},
                    { text: "Cancelar", action: () => { setShowOptions(false) }}
                    ]}
                    onClickOutside= { hideOptions}/>
                }
            </TabContainer>

            <TabContainer className="" tabIndex={1} tabController={tabController}>
                <button onClick={()=>{ setTabController(0)}}>Ver todtos</button>

                <PostContainer posts={ favPosts } onOptions={ onOptions}/>
                { showOptions && <Options options={[
                    { text: "Dar like", action: onLikeHandler},
                    { text:  "Favorito", action: onFavHandler},
                    { text: "Ver Comentarios", action: () => { setTabController(2) }},
                    { text: "Cancelar", action: () => { setShowOptions(false) }}
                    ]}
                    onClickOutside= { hideOptions}/>
                }
            </TabContainer>

            <TabContainer className="" tabIndex={2} tabController={tabController}>
                <button onClick={()=>{ setTabController(0)}}>Ver todos</button>
                <button onClick={()=>{ setTabController(1)}}>Ver favoritos</button>
                <CommentView post={selectedPost}>
                    <PostContainer post={ selectedPost } onOptions={ onOptions}/>
                </CommentView>
            </TabContainer>
        </div>
    );
}

export default UserPage;
