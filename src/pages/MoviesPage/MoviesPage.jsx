import { useEffect, useState } from "react"
import { fetchMoviesByQuery } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList"
import {Field, Form, Formik} from 'formik'
import { useSearchParams } from "react-router-dom"

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') ?? ''

    const onSubmit = values => {
        console.log(values);
        handleChangeQuery(values.query)
    }

    const initialValues = {
        query,
    }

    useEffect(
        () => {
            const getData = async () => {
                const data = await fetchMoviesByQuery({query});
                setMovies(data)
                // console.log(query);
                
            }
            getData()
        }, [query])
    
    const handleChangeQuery = value => {
        searchParams.set('query', value)
        setSearchParams(searchParams)
    }

    return (<>
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field name='query' />
                    <button onSubmit={handleChangeQuery} type="submit">Search</button>
                </Form>
            </Formik>
        </div>
        <MovieList movies={movies} />
    </>)
}
export default MoviesPage