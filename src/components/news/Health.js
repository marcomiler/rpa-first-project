import useFetchNews from '../../hooks/useFetchNews'
import ResponseNews from './ResponseNews';

const Health = () => {
    const {data, loading} = useFetchNews('health');

    return (
      <ResponseNews data={data} loading={loading}/>
    )
}

export default Health
