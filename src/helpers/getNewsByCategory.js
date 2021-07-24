
export const getNewsByCategory = async(category) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL_CATEGORY;

    var url = '';
    if(category === null || category === ''){
        url = `${API_URL}?country=us&apiKey=${API_KEY}`;
    }else{
        url = `${API_URL}?country=us&category=${category}&apiKey=${API_KEY}`;
    }
    
    const resp = await fetch(url);
    const {articles} = await resp.json();

    const news = articles.map( art => {
        return {
            title: art.title,
            author: art.author,
            url: art.url,
            image: art.urlToImage,
            description: art.description,
        }
    });

    return news;
}
