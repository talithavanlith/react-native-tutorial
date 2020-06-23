import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            //reponse variable will have a .data tag on it e.g. response.data
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    // Call searchAPI when component is first rendered
    // searchApi('pasta'); runs constantly
    // useEffect with and empty array runs once at the start
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage];
}