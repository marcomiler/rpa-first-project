import useFetchNews from '../../hooks/useFetchNews'
import Spinner from '../Spinner';
import Card from './Card';

const TopHeadLines = () => {
    const {data, loading} = useFetchNews('');

    return (
        <>
      {
        loading && <Spinner />
      }
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
          data.map( (article) => (
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

export default TopHeadLines;