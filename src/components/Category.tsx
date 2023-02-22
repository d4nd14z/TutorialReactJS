import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

interface IProps {
    id: number,
    name: string,
    removeCategory: (id:number) => void
}

export const Category: React.FC<IProps> = ({ id, name, removeCategory }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(name);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    const handlerDelete = ():void => {        
        removeCategory(id); //Llamar a la funcion del componente padre (Esta funcion se recibe a traves del prop).
    }

    return (
        <>
            <div className="border-b-2 rounded-tl-lg rounded-tr-lg p-2 mt-5 clearfix">
                <h1 className="text-xl font-bold capitalize text-blue-500">{ name }</h1>                
                <button className="rounded-full h-6 w-6 float-right -mt-6 text-red-500" onClick={ handlerDelete }>✖</button>                
            </div>
            <hr className="border-gray-300"/> 
            {
                images.map(({id, title, url}) => (
                    <GifItem key={id} id={id} title={title} url={url} />
                ))
            }                                     
        </>
    );
}
