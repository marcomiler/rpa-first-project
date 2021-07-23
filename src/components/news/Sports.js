import React from 'react';
import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';


const Sports = () => {
    const {data, loading} = useFetchNews('sports');

    return (
      <ResponseNews data={data} loading={loading}/>
    );
}

export default Sports
