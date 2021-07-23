

export const getNewsByCategory = async(category) => {

    var url = '';
    if(category === null || category === ''){
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a456f85d87e34ec1a63cf9b132408f80';
    }else{
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a456f85d87e34ec1a63cf9b132408f80`;
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
