import { useState } from "react";
import Title from '../../Components/Title/Title';
import Label from '../../Components/Label/Label';
import Input from '../../Components/Input/Input';

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
            <input className='regular-style px-2 py-2' name="idPost" value={idPost} type="hidden"/>
            <img src={ img } />
            <label className=" mt-3 block font-mono md:font-Cambria text-xl text-center">
                Titulo
            </label>
            <input className='regular-style px-2 py-2' name="title" defaultValue={titlePost} type="text"/>
            <label className=" mt-3 block font-mono md:font-Cambria text-xl text-center">
                Descripcion
            </label>
            <input className='regular-style px-2 py-2' name="description" type="text" defaultValue={descriptionPost}/>
            <label className=" mt-3 block font-mono md:font-Cambria text-xl text-center">
                Imagen
            </label>
            <input className='regular-style px-2 py-2' name="image" type="text" defaultValue={imgPost} onChange={ e => onChangeHandler(e, setImg)}/>
            <button className="mt-5 bg-blue-400 text-white py-2 px-2 rounded-md hover:bg-pink-200 font-mono md:font-Cambria text-2xl" type="submit">
                Guardar
            </button>
        </form>
    );
};

export default PostForm;