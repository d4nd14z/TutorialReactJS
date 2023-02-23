import React, { useState } from 'react'
import { Category } from './Category'

interface IProps {
    title: string
    subtitle: string
}

interface ICategory {
    id: number
    name: string
}

export const GifExpertApp: React.FC<IProps> = ({ title, subtitle }) => {
    
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [nameCategory, setNameCategory] = useState<string>("");

    //Agregar nuevas categorias
    const onAddCategory = (): void => {        
        if (nameCategory.trim().length <= 1) return; //No guardar categorias en blanco !!!
        //Validar que no se inserte la misma categoria dos veces
        if (!categories.find(category => category.name.toLowerCase() === nameCategory.toLowerCase())){ 
            const newCategory = { id: categories.length + 1, name: nameCategory }
            const arrayCategories:ICategory[] = [newCategory, ...categories]
            setCategories(arrayCategories);
        } 
        setNameCategory("");       
    }

    //Agregar nuevas categorias (Si se presiona la tecla enter).
    const keyPressHandler = (e:React.KeyboardEvent<HTMLInputElement>): void => {        
        if (e.key === 'Enter'){
            e.preventDefault();
            if (nameCategory.trim().length <= 1) return; //No guardar categorias en blanco !!!
            if (!categories.find(category => category.name.toLowerCase() === nameCategory.toLowerCase())){ 
                const newCategory = { id: categories.length + 1, name: nameCategory }
                const arrayCategories:ICategory[] = [newCategory, ...categories]
                setCategories(arrayCategories);
            } 
            setNameCategory("");
        }
    }

    //Eliminar categorias
        const onRemoveCategory = (id: number): void => {                                
        const newCategories:ICategory[] = categories.filter((cat:ICategory) => cat.id != id);
        setCategories(newCategories);
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="font-black text-3xl mt-5">{ title }</h1>
                <p className="mb-4 text-xs">{ subtitle }</p>
                <form className="w-full">
                    <div className="w-full md:w-1/2 md:mb-0">                        
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Search your gif images" type="text" value={ nameCategory } onChange={ (e:React.ChangeEvent<HTMLInputElement>) => { setNameCategory(e.target.value) } } onKeyPress={ keyPressHandler } />                        
                    </div>
                    <button type="button" className="bg-blue-500 text-white py-1 px-3 rounded-md" onClick={onAddCategory}>Agregar</button>
                </form>                                
                <ul className="mt-8">                    
                    {
                        categories.map((cat) => (
                            <Category key={ cat.id } id={ cat.id } name={ cat.name }  removeCategory={ onRemoveCategory } />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
