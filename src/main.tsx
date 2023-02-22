import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './components/GifExpertApp';


import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp title="Gif Expert App" subtitle="Gif Resource Browser"/>
  </React.StrictMode>
)
