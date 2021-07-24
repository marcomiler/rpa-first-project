import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const TopHeadLines = () => {
    const {data, loading} = useFetchNews('');

    return (
      <ResponseNews data={data} loading={loading}/>
    )
}

export default TopHeadLines;