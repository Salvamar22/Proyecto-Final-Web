import PostAdmin from "../PostAdmin/PostAdmin.jsx"

const PostContainer = ({ posts = [], onOptions = () => {} }) => {
    
    return <div className="w-full h-full flex flex-col items-center bg-gray-300">
        {
            posts.map(
                p  =>  {
                    return p && <PostAdmin key={ p._id } post={ p } onOptions={ onOptions}/> 
            })
        }
    </div>
}

export default PostContainer;