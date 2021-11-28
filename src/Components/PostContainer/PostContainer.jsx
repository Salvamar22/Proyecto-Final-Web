import PostAdmin from "../PostAdmin/PostAdmin.jsx"

const PostContainer = ({ posts = [], onOptions = () => {} }) => {
    
    return <div className="w-full flex flex-col items-center bg-gray-200">
        {
            posts.map(
                p  =>  {
                    return <PostAdmin key={ p._id } post={ p } onOptions={ onOptions}/> 
            })
        }
    </div>
}

export default PostContainer;