import React, { useState, useEffect } from 'react';

interface IProps {
    id: string,
    title: string,
    url: string
}

export const GifItem: React.FC<IProps> = ({ id, title, url }) => {

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-2">
            <div className="h-48 lg:h-auto lg:w-48 flex-none rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${url})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} title="Woman holding a mug"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">                    
                    <div className="text-gray-900 font-bold text-xl mb-2 capitalize">{ title }</div>
                    <p className="text-gray-700">{url}</p>
                </div>                
            </div>
        </div>
    );
}
