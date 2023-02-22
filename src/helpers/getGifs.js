export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jR5YOjKgJsOmC2nGTuH0WNX8mzbhCy8b&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url,
        date: img.import_datetime       
    }));

    //console.log(gifs);
    return gifs;
}  