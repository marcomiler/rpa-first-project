
//https://newsapi.org/v2/everything?q=tesla&from=2021-06-24&sortBy=publishedAt&apiKey=a456f85d87e34ec1a63cf9b132408f80


export const getNewsByQuery = async(query) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL_QUERY;

    var url = `${API_URL}?q=${query}&from=2021-06-24&sortBy=publishedAt&apiKey=${API_KEY}`;
    
    const resp = await fetch(url);
    const {articles} = await resp.json();

    if(articles === [] || articles ===undefined){
        console.log('sin articulos');
        return [];
    }

    const news = articles.map( art => {
        return {
            title: art.title,
            author: art.author,
            url: art.url,
            image: art.urlToImage,
            description: art.description,
        }
    });
    console.log(articles);
    return news;
}