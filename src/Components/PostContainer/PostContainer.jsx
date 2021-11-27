import PostAdmin from "../PostAdmin/PostAdmin.jsx"

const PostContainer = ({ posts = [], onOptions = () => {} }) => {
    
    return <div className="w-full flex flex-col items-center bg-yellow-500">
        {
            posts.map(
                p  =>  {
                    return <PostAdmin key={ p._id } post={ p } onOptions={ onOptions}/> 
            })
        }
    </div>
}

export default PostContainer;