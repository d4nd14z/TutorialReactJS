import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

interface GIFImage {
    id: string,
    title: string,
    url: string
}

export const useFetchGifs = (name: string) => {

    const [images, setImages] = useState<GIFImage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async () => {
        const newImages = await getGifs(name);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}