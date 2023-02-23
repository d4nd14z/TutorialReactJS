import React, { useState, useEffect } from 'react';
import { GifItem } from '../components' //../components/index.ts;
import { useFetchGifs } from '../hooks/useFetchGifs';
import loadingGIF from "../assets/img/loading.gif";

interface IProps {
    id: number,
    name: string,
    removeCategory: (id:number) => void
}

interface GIFImage {
    id: string,
    title: string,
    url: string
}

export const Category: React.FC<IProps> = ({ id, name, removeCategory }) => {

    const {images, isLoading} = useFetchGifs(name);

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

            {  isLoading && ( <img src={loadingGIF} title="Cargando..." /> ) }            
            
            <div className="">
            {
                images.map((img:GIFImage) => (
                    <GifItem key={img.id} { ...img } />
                ))
            }                 
            </div>                    
        </>
    );
}
