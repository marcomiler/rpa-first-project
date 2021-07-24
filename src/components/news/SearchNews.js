import { useEffect, useState } from 'react';
import useFetchNewsByQuery from '../../hooks/useFetchNewsByQuery';
import { useForm } from '../../hooks/useForm';
// import Mensaje from '../Mensaje';
// import ResponseNews from './ResponseNews';

const SearchNews = ({history}) => {

    const [values, handleInputChange] = useForm({
        searchText: ''
    });

    const [value, setValue] = useState('');
    
    const {searchText} = values;
    const {data, loading} = useFetchNewsByQuery(value);

    useEffect(() => {
        
    }, [])
     
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        setValue(searchText);
    }

    return (

        <div className="row">
            <div className="col">

            </div>
            <hr />
            <form onSubmit={handleSearch}>
                <input type="text" 
                    placeholder="Buscar una noticia"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                    className="form-control"/>
                <button type="submit"
                    className="btn btn-outline-primary m-1">Buscar...</button>
            </form>

            <div className="row">

            </div>

        </div>

        


        
        /* {
            data === []
            ? <Mensaje mensaje="No se encontró resultados"/>
            : <ResponseNews data={data} loading={loading}/>
        } */
        
        
    )
}

export default SearchNews
