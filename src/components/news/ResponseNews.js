import React from 'react';
import Spinner from '../Spinner';
import Card from './Card';

const ResponseNews = ({data, loading}) => {
    return (
        <>
            {
                loading && <Spinner />
            }
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                {
                data.map( article => (
                    <div className="col-md-4">
                        <Card key={article} {...article} />
                    </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default ResponseNews;