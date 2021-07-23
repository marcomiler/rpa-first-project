import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const Technology = () => {

    const {data, loading} = useFetchNews('technology');

    return (
        <ResponseNews data={data} loading={loading}/>
    );
}

export default Technology;
