import React from "react";
import Card from "./Card";

import useFetchNews from "../../hooks/useFetchNews";
import Spinner from '../Spinner'

function Cards() {

  const {data: news, loading} = useFetchNews('general');

  return (
    <>
      {
        loading && <Spinner />
      }
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
          news.map( article => (
              <div className="col-md-4">
                <Card key={article.title} {...article} />
              </div>
              ))
          }
        </div>
      </div>
    </>
  );

}

export default Cards;