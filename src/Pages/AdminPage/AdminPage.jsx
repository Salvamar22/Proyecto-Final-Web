import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import adminServices from "../../Services/admin.services.js";
import userServices from "../../Services/user.services.js";
import PostForm from "../../Components/PostForm/PostForm.jsx";
import { useSessionContext } from "../../Contexts/SessionContext.js";
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

const AdminPage = () => {
    
    const { token, user, logout } = useSessionContext();
    const [ posts, setPosts ] = useState([]);
    const [ showOptions, setShowOptions ] = useState(false);
    const [ tabController, setTabController ] = useState(0);
    const [ selectedPost, setSelectedPost ] = useState(nullPost);

    useEffect( async () => {
        if(token) {
            let res = await adminServices.ownedPost(token);
            setPosts(res);
            console.log(posts);
        }
    }, [token])

    const onCreateHandler= async (formData) => {
        const res = await adminServices.createPost(
            token,
            formData.get("title"),
            formData.get("description"),
            formData.get("image"));
            if(res){
                res = await adminServices.ownedPost(token);
                setPosts(res);
                setTabController(0);
            }
        //console.log(await res.json());
    }

    const onUpdateHandler= async (formData) => {
        console.log(formData.get("idPost"))
        const res = await adminServices.updatePost(
            token,
            formData.get("idPost"),
            formData.get("title"),
            formData.get("description"),
            formData.get("image"));

            if(res) {
                console.log(await res);
                selectedPost.title = formData.get("title");
                selectedPost.description = formData.get("description");
                selectedPost.image = formData.get("image");
                setTabController(0);}
            else
                console.log("No se pudo editar");
    }

    const onToggleOptionHandler = async () => {
        let res = await adminServices.toggleActive(token, selectedPost._id);
        if(res) {
            selectedPost.active = !selectedPost.active;
            console.log(await res);}
        else {
            console.log("No se pudo alternar");}

        setShowOptions(false);
    }

    const onEditOptionHandler = async (post) => {
        setShowOptions(false)
        setTabController(2);
    }
    
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

    const onSeeCommentsHandler = (post) => {
        setSelectedPost(post);
        setTabController(3);
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


    const onOptions = async (post) => {
        setSelectedPost(post);
        setShowOptions(true);
    }
    
    const hideOptions = () => { setShowOptions(false)};

    const hideShow = () => { return selectedPost.active ? "Ocultar Post" : "Mostrar Post"}
    
    return (
        <div className=" min-h-screen text-center flex flex-col font-mono md:font-Cambria  w-full bg-gray-300 h-full relative">
            
            <div className="w-full flex flex-wrap justify-around mx-auto bg-blue-500 text-white py-2 px-3 md:font-Cambria text-xl ">
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ setTabController(0)}}>Ver mis post</button>
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ setTabController(1)}}>Añadir nuevo post</button>
                <button className="hover:bg-blue-800 py-2 px-3" onClick={()=>{ logout()}}>Logout</button>
            </div>

            <TabContainer tabIndex={0} tabController={tabController} >

                <PostContainer posts={ posts } onOptions={ onOptions}
                        onLike={ onLikeHandler} onChat={ onSeeCommentsHandler}/>
            
            </TabContainer>
            
            <TabContainer className="bg-gray-300 p-14 flex flex-col h-full justify-center items-center" tabIndex={1} tabController={tabController} >
                <button className="text-gray-400 self-start text-lg hover:text-gray-700 mb-2 absolute top-4 left-5"  onClick={ () => {setTabController(0)}}>
                    <FaArrowLeft className=" text-xl"/>
                </button>
                <PostForm onSubmit={ onCreateHandler } />
            </TabContainer>
            
            <TabContainer className="bg-gray-300 p-4 flex flex-col h-full justify-center items-center" tabIndex={2} tabController={tabController} >
                <button className="text-gray-400 text-lg self-start hover:text-gray-700 mb-2 absolute top-4 left-5" onClick={ () => {setTabController(0)}}>
                    <FaArrowLeft className="text-xl"/>
                </button>
                <PostForm onSubmit={ onUpdateHandler }
                    idPost={selectedPost._id}
                    titlePost={selectedPost.title}
                    descriptionPost={selectedPost.description}
                    imgPost={selectedPost.image} />
            </TabContainer>

            <TabContainer className="" tabIndex={3} tabController={tabController}>
                <CommentView post={selectedPost} onComment={onCommentHandler}>
                    <Post post={ selectedPost } onOptions={ onOptions}
                        onLike={ onLikeHandler} onChat={ onSeeCommentsHandler}/>
                </CommentView>
            </TabContainer>

            { showOptions && <Options options={[
                { text: "Editar", action: onEditOptionHandler},
                { text:  hideShow(), action: onToggleOptionHandler},
                { text: "Ver Comentarios", action: () => onSeeCommentsHandler(selectedPost)},
                { text: "Cancelar", action: () => { setShowOptions(false) }}
                ]}
                onClickOutside= { hideOptions}/>
            }

        </div>
    )
}

export default AdminPage;

/*<div></div>
            <PostAdmin post={selectedPost}/>

*/