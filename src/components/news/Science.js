import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const Science = () => {
    const {data, loading} = useFetchNews('science');

    return (
      <ResponseNews data={data} loading={loading}/>
    );
}

export default Science;
