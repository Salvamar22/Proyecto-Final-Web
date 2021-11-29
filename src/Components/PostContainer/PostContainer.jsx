import PostAdmin from "../PostAdmin/PostAdmin.jsx"

const PostContainer = ({ posts = [], onOptions = () => {} }) => {
    
    return <div className="w-full h-full flex flex-col items-center bg-white">
        {
            posts.map(
                p  =>  {
                    return <PostAdmin key={ p._id } post={ p } onOptions={ onOptions}/> 
            })
        }
    </div>
}

export default PostContainer;