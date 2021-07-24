import { useEffect, useState } from 'react';
import { getNewsByQuery } from '../helpers/getNewsByQuery';

const useFetchNewsByQuery = (query) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    

    useEffect(() => {
        if(query === ''){
            setState({
                data: [],
                loading: true
            })
        }
    }, [query])

    useEffect(() => {
        getNewsByQuery(query)
            .then(articles => {
                setState({
                    data: articles,
                    loading: false
                })
            });
            
    }, [query]);
    console.log(state);
    return state;
}

export default useFetchNewsByQuery;