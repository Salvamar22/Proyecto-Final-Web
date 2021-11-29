import Post from "../Post/Post.jsx"

const PostContainer = ({ posts = [], onOptions = () => {}, onLike=() => {}, onFav=() => {}, onChat=() => {} }) => {
    
    return <div className="w-full h-full flex flex-col items-center bg-gray-300">
        {
            posts.map(
                p  =>  {
                    return p && 
                    <Post
                        key={ p._id }
                        post={ p }
                        onOptions={ onOptions}
                        onLike={ onLike}
                        onFav={ onFav}
                        onChat={ onChat}
                    /> 
            })
        }
    </div>
}

export default PostContainer;