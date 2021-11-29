import { useSessionContext } from "../../contexts/SessionContext.js";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import adminServices from "../../Services/admin.services.js";
import PostForm from "../../Components/PostForm/PostForm.jsx";
import Options from "../../Components/Options/Options.jsx";
import TabContainer from "../../Components/TabContainer/TabContainer.jsx";
import PostContainer from "../../Components/PostContainer/PostContainer.jsx";

const AdminPage = () => {
    
    const { token, user } = useSessionContext();
    const [ posts, setPosts ] = useState([]);
    const [ showOptions, setShowOptions ] = useState(false);
    const [ tabController, setTabController ] = useState(0);
    const [ selectedPost, setSelectedPost ] = useState(adminServices.nullPost);

    useEffect( async () => {
        if(token) {
            //console.log(await adminServices.toggleActive(token, "619b00736c9516021fcc6d50"))
            console.log("Hola señora. Que tal?");
            console.log("El token es: " + token);
            //console.log(await adminServices.ownedPost(token));
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
                selectedPost.image = formData.get("image");}
            else
                console.log("No se pudo editar");
            setTabController(0);
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
        setShowOptions(true);
    }
    
    const hideOptions = () => { setShowOptions(false)};

    const hideShow = () => { return selectedPost.active ? "Ocultar Post" : "Mostrar Post"}
    
    return (
        <div className=" min-h-screen text-center flex flex-col font-mono md:font-Cambria  w-full bg-gray-300 h-full relative">
            
            <TabContainer tabIndex={0} tabController={tabController} >
                <button className = " bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-800  md:font-Cambria text-xl " onClick={ () => {setTabController(1)}}>
                    Añadir nuevo post
                </button>
                <PostContainer posts={ posts } onOptions={ onOptions}/>
                { showOptions && <Options options={[
                    { text: "Editar", action: onEditOptionHandler},
                    { text:  hideShow(), action: onToggleOptionHandler},
                    { text: "Cancelar", action: () => { setShowOptions(false) }}
                    ]}
                    onClickOutside= { hideOptions}/>
                }
            </TabContainer>
            
            <TabContainer className="bg-white p-14 flex flex-col h-full justify-center items-center" tabIndex={1} tabController={tabController} >
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
        </div>
    )
}

export default AdminPage;

/*<div></div>
            <PostAdmin post={selectedPost}/>

*/