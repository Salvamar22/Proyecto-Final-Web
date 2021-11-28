import { useState } from "react";

const PostForm = ( { onSubmit, idPost="", titlePost="", descriptionPost="", imgPost="" } ) => {
    const [img, setImg] = useState(imgPost);

    const onChangeHandler = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit( new FormData(e.target));
    }

    return (
        <form onSubmit={ onSubmitHandler } className="w-full flex flex-col items-center">
            <input name="idPost" value={idPost} type="hidden"/>
            <img src={ img } />
            <label> Titulo </label>
            <input name="title" defaultValue={titlePost} type="text"/>
            <label> Descripcion </label>
            <input name="description" type="text" defaultValue={descriptionPost}/>
            <label> Imagen </label>
            <input name="image" type="text" defaultValue={imgPost} onChange={ e => onChangeHandler(e, setImg)}/>
            <button type="submit"> Guardar </button>
        </form>
    );
};

export default PostForm;