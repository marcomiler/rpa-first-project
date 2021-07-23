import React from 'react';
import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const Entertainment = () => {
    const {data, loading} = useFetchNews('entertainment');

    return (
        <ResponseNews data={data} loading={loading}/>
    );
}

export default Entertainment;
