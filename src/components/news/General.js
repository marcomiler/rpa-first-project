import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const General = () => {

    const {data, loading} = useFetchNews('general');

    return (
      <ResponseNews data={data} loading={loading}/>
    );
}

export default General;
