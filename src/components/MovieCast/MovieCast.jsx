import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCastByMovieId } from "../../services/api"

const MovieCast = () => {
    const { movieId } = useParams()

    const [movieCast, setMovieCast] = useState('')

    useEffect(
            () => {
            const getData = async () => {
                const data = await fetchCastByMovieId(movieId.toString())
                setMovieCast(data)
                // console.log(data, '!');
            }
            getData()
            
            }, [movieId])
        
        if (!movieCast) {
            return <h2>Loading...</h2>
    }
    
    return <>
    <div>
        <ul>
            {movieCast.map(item => (
                <li key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
                    <p>{item.name}</p>
                    <p>Character: { item.character }</p>
                </li>))}
        </ul>
    </div>
    
    </>
}
export default MovieCast